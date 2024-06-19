const Article = require("./models/articleModel")
const Headline = require("./models/headlineModel")
const User = require("./models/userModel")

const removeDuplicates = async () => {
    try {
        const aggregation = 
        [
            {
                $group: {
                    _id: { title: "$title" },
                    uniqueIds: { $addToSet: "$_id" },
                    count: { $sum: 1 }
                }
            },
            {
                $match: {
                    count: { $gt: 1 }
                }
            }
        ]
        const article_duplicates = await Article.aggregate(aggregation);
        await deleteDuplicates(article_duplicates, true);
        console.log("Successfully removed article duplicates")
        
        const headline_duplicates = await Headline.aggregate(aggregation);
        await deleteDuplicates(headline_duplicates, false);
        console.log("Successfully removed headline duplicates")
    } catch (error) {
        console.log(`Error while removing duplicates: ${error}`)
    }
}

const deleteDuplicates = async (duplicates, isArticles) => {
    for (let duplicate of duplicates) {
        const [firstId, ...duplicateIds] = duplicate.uniqueIds;
        if (isArticles) {
            await Article.deleteMany({ _id: { $in: duplicateIds } });
        } else {
            await Headline.deleteMany({ _id: { $in: duplicateIds } });
        }
    }
}

const truncateUserCollection = async () => {
    try {
        await User.deleteMany({});
        console.log('User collection truncated successfully');
    } catch (error) {
        console.error('Error truncating collection:', error);
    }
}

module.exports = {removeDuplicates, truncateUserCollection}
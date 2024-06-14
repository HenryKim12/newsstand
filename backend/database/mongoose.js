const Article = require("./models/articleModel")
const Headline = require("./models/headlineModel")

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

    } catch (error) {
        console.log(error)
    }
}
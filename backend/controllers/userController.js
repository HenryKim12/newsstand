const User = require("../database/models/userModel")
const Article = require("../database/models/articleModel")

const getUserArticles = async (req, res) => {
    try {
        const user_id = req.user.id
        const user = await User.findOne({_id: user_id})
        res.status(200).json(user.saved_articles)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const getUserArticleById = async (req, res) => {
    try {
        const article_id = req.params.id
        const user_email = req.body.email
        const user = await User.findOne({email: user_email})
        const user_articles = user.saved_articles
        let articleById;
        for (let article of user_articles) {
            if (article._id == article_id) {
                articleById = article._id
                break
            }
        }
        if (!articleById) {
            throw new Error(`User does not have article ${article_id} saved`)
        }
        res.status(200).json(articleById)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const deleteUserArticle = async (req, res) => {
    try {
        //check if it exists and we can delete
        const user_id = req.user.id
        //const user = await User.findOne({_id: user_id})
        const article_id = req.params.id
        await User.deleteOne(
            {_id: user_id},
            {$pull: {saved_articles: {_id: article_id}}}
        )
        res.status(204)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const addUserArticle = async (req, res) => {
    try {
        const user_id = req.user.id
        const article_id = req.body.id
        const article = await Article.findById(article_id)

        // check if article already saved
        const query = {
            _id: user_id,
            saved_articles: {
              $elemMatch: {
                title: article.title
              }
            }
          };
        const existingSavedArticle = await User.findOne(query)
        if (existingSavedArticle) {
            return res.status(403).json({message: "Article is already in your favourites"})
        }
        const result = await User.updateOne(
            {_id: user_id},
            {$push: {saved_articles: article}}
        )
        return res.status(204).json({message: "SUCCESS"})
        
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getUserArticles,
    getUserArticleById,
    deleteUserArticle,
    addUserArticle
}
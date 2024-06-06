const User = require("../models/userModel")
const Article = require("../models/articleModel")

const getUserArticles = async (req, res) => {
    try {
        let user_id = req.body.id
        const user = User.findById(user_id)
        res.status(200).json(user.articles)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const getUserArticleById = async (req, res) => {
    try {

    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const deleteUserArticle = async (req, res) => {
    try {

    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const addUserArticle = async (req, res) => {
    try {
        const user_id = req.body.id
        const article_id = req.params.id
        const article = Artcile.findById(article_id)
        User.updateOne(
            {_id: user_id},
            {$push: {saved_articles: article}}
        )
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
const Article = require("../models/articleModel")

const getAllArticles = async (req, res) => {
    try {
        let articles = await Article.find()
        let articleArray = articles.map(article => article.toObject())
        res.status(200).json(articleArray)
    } catch (error) {        
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    } 
}

const getArticleById = async (req, res) => {
    const { id } = req.params
    try {
        let article = Article.findById(id)
        res.status(200).json(article)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

// TODO: find what users can query and possible values that can be provided for querying
const getArticleByQuery = async (req, res) => {
    const { query, source, from, to } = res.body
    try {
        let article = Article.find()
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllArticles,
    getArticleById,
    getArticleByQuery
}
const Article = require("../database/models/articleModel")

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find()
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
        let article = await Article.findById(id)
        res.status(200).json(article)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const getArticleByQuery = async (req, res) => {
    let body = {}
    if (req.body.q) {
        body["q"] = req.body.q
    }
    try {
        const article = await Article.find({
            $or: [
                {title: {$regex : body["q"]}}, 
                {source: {$regex : body["q"]}},
                {author: {$regex: body["q"]}},
                {description: {$regex: body["q"]}}
            ]
        })
        res.status(200).json(article)
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
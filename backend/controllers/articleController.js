const Article = require("../models/articleModel")

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

// TODO: find what users can query and possible values that can be provided for querying
const getArticleByQuery = async (req, res) => {
    let body = {}
    if (res.body.query) {
        body["q"] = res.body.query
    }
    if (res.body.source) {
        body["source"] = res.body.source
    }
    if (res.body.from) {
        body["from"] = res.body.from
    }
    if (res.body.to) {
        body["to"] = res.body.to
    }
    try {
        let query = {}
        for (const [key, value] of body.entries()) {
            query[key] = value
        }
        console.log(query)
        let article = await Article.find(query)
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
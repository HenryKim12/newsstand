const Article = require("../database/models/articleModel")

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find().sort({publish_date: -1})
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
                {$or: [
                    {title: {$regex : body["q"].toLowerCase()}}, 
                    {source: {$regex : body["q"].toLowerCase()}},
                    {author: {$regex: body["q"].toLowerCase()}},
                    {description: {$regex: body["q"].toLowerCase()}}
                ]},
                {$or: [
                    {title: {$regex : body["q"].charAt(0).toUpperCase() + body["q"].slice(1)}}, 
                    {source: {$regex : body["q"].charAt(0).toUpperCase() + body["q"].slice(1)}},
                    {author: {$regex: body["q"].charAt(0).toUpperCase() + body["q"].slice(1)}},
                    {description: {$regex: body["q"].charAt(0).toUpperCase() + body["q"].slice(1)}}
                ]}
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
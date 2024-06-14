const Headline = require("../database/models/headlineModel")

const getAllHeadlines = async (req, res) => {
    try {
        const headlines = await Headline.find()
        const headlineArray = headlines.map(headline => headline.toObject())
        res.status(200).json(headlineArray)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const getHeadlineById = async (req, res) => {
    const { id } = req.params
    try {
        const headline = await Headline.findById(id)
        res.status(200).json(headline)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const getHeadlineByQuery = async (req, res) => {
    let body = {}
    if (req.body.q) {
        body["q"] = req.body.q
    }
    try {
        const headline = await Headline.find({
            $or: [
                {title: {$regex : body["q"]}}, 
                {source: {$regex : body["q"]}},
                {author: {$regex: body["q"]}},
                {description: {$regex: body["q"]}}
            ]
        })
        res.status(200).json(headline)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllHeadlines,
    getHeadlineById,
    getHeadlineByQuery
}
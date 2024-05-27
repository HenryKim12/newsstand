const Headline = require("../models/headlineModel")

const getAllHeadlines = async (req, res) => {
    try {
        const headlines = Headline.find()
        const headlineArray = headlines.map(headline => headline.toObject())
        res.status(200).json(headlineArray)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const getHeadlineById = async (req, res) => {
    try {
        // TODO
    } catch (error) {
        console.log(`Error: ${error.message}`)
        res.status(400).json({error: error.message})
    }
}

const getHeadlineByQuery = async (req, res) => {
    try {
        // TODO
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
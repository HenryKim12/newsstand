const Article = require("../models/articleModel")

// get top headlines
const getTopHeadlines = async (req, res) => {
    try {
        res.status(200).json({msg: "success"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

module.exports = {
    getTopHeadlines
}
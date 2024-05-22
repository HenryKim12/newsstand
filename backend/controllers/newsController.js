const Article = require("../models/articleModel")

const URL = "https://newsapi.org/v2/top-headlines?country=us"

// get top headlines
const getTopHeadlines = async (req, res) => {
    const options = {
        method: "GET"
    }
    console.log("here")
    try {
        const response = await fetch(URL + `&apiKey=${process.env.NEWS_API_KEY}`, options)
        const data = await response.json()
        const a1 = data["articles"][0]
        const obj = {
            title: a1["title"], 
            source: a1["source"], 
            author: a1["author"], 
            description: a1["description"], 
            content: a1["content"], 
            url: a1["url"], 
            image_url: a1["image_url"],
            publish_date: a1["publish_date"]
        }
        console.log(obj)
        const article = await Article.create(obj["title"], obj["source"], obj["author"], obj["description"], obj["content"], 
            obj["url"], obj["image_url"], obj["publish_date"])
        
        console.log(article)
        res.status(200).json(article)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
    
}

module.exports = {
    getTopHeadlines
}
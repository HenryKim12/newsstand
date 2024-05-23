const Article = require("../models/articleModel")

const URL = "https://newsapi.org/v2/top-headlines?country=us"

// get top headlines
const getTopHeadlines = async (req, res) => {
    try {
        const response = await fetch(URL + `&apiKey=${process.env.NEWS_API_KEY}`, {
            method: "GET"
        })
        const data = await response.json()
        const articles = data["articles"]
        const targets = ["title", "source", "author", "description", "content", "url", "urlToImage", "publishedAt"]

        articles.forEach(async (article) => {
            let model = {}
            let invalid = false
            for (target of targets) {
                if (article[target]) {
                    if (target === "source") {
                        model[target] = article[target]["name"]
                    } else {
                        model[target] = article[target]
                    }
                } else {
                    invalid = true
                    break
                }
            }

            if (!invalid) {
                const title = model["title"]
                const source = model["source"]
                const author = model["author"]
                const description = model["description"]
                const content = model["content"]
                const url = model["url"]
                const image_url = model["urlToImage"]
                const publish_date = model["publishedAt"]
                const article_row = await Article.create({title, source, author, description, content, url, image_url, publish_date})
            }
        })
        res.status(200).json({msg: "success"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

module.exports = {
    getTopHeadlines
}
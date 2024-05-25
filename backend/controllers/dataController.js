const Article = require("../models/articleModel")
const Headline = require("../models/headlineModel")

const cron = require("node-cron")
const job = cron.schedule("0 0 0 * * *", () => {
    console.log("executing")
})
job.start()

const HEADLINE_URL = "https://newsapi.org/v2/top-headlines?language=en"
const EVERYTHING_URL = "https://newsapi.org/v2/everything?q=WORLD OR SCIENCE OR TECH OR HEALTH OR POLITICS OR BUSINESS OR SPORTS OR ENTERTAINMENT"

const getRecentArticles = async(req, res) => {
    try {
        const response = await fetch(EVERYTHING_URL, {
            method: "GET",
            headers: {
                "X-Api-Key": process.env.NEWS_API_KEY
            }
        })
        const data = await response.json()
        const articles = data["articles"]
        console.log(articles)
    } catch (error) {

    }
}

const retrieveAllHeadlines = async () => {
    try {
        const response = await fetch(HEADLINE_URL, {
            method: "GET",
            headers: {
                "X-Api-Key": process.env.NEWS_API_KEY
            }
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
                const headline_row = await Headline.create({title, source, author, description, content, url, image_url, publish_date})
            }
        })
    } catch (error) {
        console.log(error.message)
    }    
}

module.exports = {
    getRecentArticles
}
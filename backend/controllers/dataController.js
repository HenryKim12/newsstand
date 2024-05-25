const Article = require("../models/articleModel")
const Headline = require("../models/headlineModel")

const EVERYTHING_URL = new URL("https://newsapi.org/v2/everything")
const HEADLINE_URL = new URL("https://newsapi.org/v2/top-headlines")

// scheduled jobs to store articles to mongodb
const cron = require("node-cron")
const daily_job = cron.schedule("0 0 0 * * *", async () => {
    console.log(`Executing daily articles retrieval: ${new Date()}`)
    await getArticles(false)
    console.log("Successfully fetched daily articles!")
})
daily_job.start()

const weekly_job = cron.schedule("0 0 0 * * *", async () => {
    console.log(`Executing weekly headline articles retrieval: ${new Date()}`)
    await getArticles(true)
    console.log("Successfully fetched headline articles!")
})
weekly_job.start()

const getArticles = async (isHeadlineJob) => {
    try {
        let url
        if (isHeadlineJob) {
            url = HEADLINE_URL
            url.searchParams.append("language", "en")
        }
        else {
            url = EVERYTHING_URL
            url.searchParams.append("q", "WORLD OR SCIENCE OR TECH OR HEALTH OR POLITICS OR BUSINESS OR SPORTS OR ENTERTAINMENT")
        }
        const response = await fetch(url, {
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
                if (isHeadlineJob) {
                    const headline_row = await Headline.create({title, source, author, description, content, url, image_url, publish_date})
                } else {
                    const article_row = await Article.create({title, source, author, description, content, url, image_url, publish_date})
                }
            }
        })
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

module.exports = {
    getArticles
}
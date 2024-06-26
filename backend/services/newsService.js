const Article = require("../database/models/articleModel")
const Headline = require("../database/models/headlineModel")

const EVERYTHING_URL = new URL("https://newsapi.org/v2/everything")
const HEADLINE_URL = new URL("https://newsapi.org/v2/top-headlines")

// scheduled jobs to store articles to mongodb
const cron = require("node-cron")
// every day at midnight (0 0 0 * * *)
const daily_job = cron.schedule("0 0 0 * * *", async () => {         // per min: 0 * * * * *
    console.log(`Executing daily news retrieval: ${new Date()}`)
    await getArticles(false)
    console.log("Successfully fetched articles!")
    await getArticles(true)
    console.log("Successfully fetched headlines!")
})
daily_job.start()

const getArticles = async (isHeadlineJob) => {
    try {
        let url
        if (isHeadlineJob) {
            url = HEADLINE_URL
            url.searchParams.append("language", "en")
            url.searchParams.append("pageSize", 100)
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
        const mostRecentHeadline = await getMostRecentHeadline()
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
                const atitle = model["title"]
                const source = model["source"]
                const author = model["author"]
                const description = model["description"]
                const content = model["content"]
                const url = model["url"]
                const image_url = model["urlToImage"]
                const publish_date = model["publishedAt"]
                if (isHeadlineJob) {
                    const lts_publish_date = mostRecentHeadline[0]["publish_date"]
                    if (lts_publish_date < new Date(publish_date)) {
                        await Headline.create({atitle, source, author, description, content, url, image_url, publish_date})
                    }
                } else {
                    const existingArticle = await Article.countDocuments({title: atitle}, {limit: 1})
                    if (existingArticle === 0) {
                        await Article.create({atitle, source, author, description, content, url, image_url, publish_date})
                    }
                }
            }
        })
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

const getMostRecentHeadline = async() => {
    try {
        return await Headline.find().sort({publish_date: -1}).limit(1)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

module.exports = {
    getArticles
}
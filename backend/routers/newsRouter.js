const Article = require("../models/articleModel")
const newsController = require("../controllers/newsController")

const dataController = require("../controllers/dataController")

const express = require("express")
const router = express.Router()

router.get("/", dataController.getRecentArticles)

router.get("/:id", (req, res) => {
    res.json({msg: "GET by id meta"})
})

router.post("/", async (req, res) => {
    const {title, source, author, description, content, url, image_url, publish_date} = req.body
    try {
        const article = await Article.create({title, source, author, description, content, url, image_url, publish_date})
        res.status(200).json(article)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete("/:id", (req, res) => {
    res.json({msg: "DELETE meta"})
})

router.patch("/", (req, res) => {
    res.json({msg: "UPDATE meta"})
})

module.exports = router
const express = require("express")
const router = express.Router()

const articleController = require("../controllers/articleController.js")

router.get("/", articleController.getAllArticles)
router.get("/:id", articleController.getArticleById)
router.post("/", articleController.getArticleByQuery)

// unneeded 
// router.delete("/:id", (req, res) => {})
// router.patch("/", (req, res) => {})

module.exports = router
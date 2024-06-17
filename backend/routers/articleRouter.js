const express = require("express")
const router = express.Router()
const authenticateToken = require("../jwt/authenticateToken.js")

const articleController = require("../controllers/articleController.js")

router.get("/", articleController.getAllArticles)
router.get("/:id", articleController.getArticleById)
router.post("/", authenticateToken, articleController.getArticleByQuery)

// unneeded 
// router.delete("/:id", (req, res) => {})
// router.patch("/", (req, res) => {})

module.exports = router
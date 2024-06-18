const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const authenticateToken = require("../jwt/authenticateToken")

router.get("/articles", authenticateToken, userController.getUserArticles)
router.get("/articles/:id", userController.getUserArticleById)
router.delete("/articles/:id", authenticateToken, userController.deleteUserArticle)
router.post("/articles", authenticateToken, userController.addUserArticle)

module.exports = router
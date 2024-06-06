const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.get("/", userController.getUserArticles)
router.get("/:id", userController.getUserArticleById)
router.delete("/", userController.deleteUserArticle)
router.post("/", userController.addUserArticle)

module.exports = router
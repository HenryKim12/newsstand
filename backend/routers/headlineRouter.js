const express = require("express")
const router = express.Router()

const headlineController = require("../controllers/headlineController")

router.get("/", headlineController.getAllHeadlines)
router.get("/:id", headlineController.getHeadlineById)
router.post("/", headlineController.getHeadlineByQuery)

// uneeded
// router.delete("/", (req, res) => {})
// router.patch("/", (req, res) => {})

module.exports = router
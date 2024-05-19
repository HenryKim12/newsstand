const Meta_Post = require("../models/Meta/Posts")

const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({msg: "GET meta"})
})

router.get("/:id", (req, res) => {
    res.json({msg: "GET by id meta"})
})

router.post("/", async (req, res) => {
    const {user, content, post_date} = req.body
    try {
        const post = await Meta_Post.create({user, content, post_date})
        res.status(200).json(post)
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
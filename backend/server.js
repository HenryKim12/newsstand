require("dotenv").config()
var cors = require("cors")

const express = require("express")
const mongoose = require("mongoose")
const newsRouter = require("./routers/newsRouter")

const app = express()
app.use(cors());

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routers
app.use("/api/news", newsRouter)

// connect to db
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })




require("dotenv").config()
var cors = require("cors")

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const newsRouter = require("./routers/newsRouter")
const articleRouter = require("./routers/articleRouter")
const headlineRouter = require("./routers/headlineRouter")
const authRouter = require("./routers/authRouter")
//const cron_job = require("./controllers/dataController")

const app = express()
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routers
app.use("/api/news", newsRouter)
app.use("/api/articles", articleRouter)
app.use("/api/headlines", headlineRouter)
app.use("/api", authRouter)

// connect to db
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {dbName: process.env.MONGO_DATABASE_NAME})
    .then(() => {
        // do not explicitly listen on PORT when running tests, or else PORT collision error
        if (process.env.ENV !== "tst") {
            app.listen(process.env.PORT, () => {
                console.log("Connected to MONGODB & listening on port", process.env.PORT)
            })
        }
        // app.listen(process.env.PORT, () => {
        //     console.log("listening on port", process.env.PORT)
        // })
    })
    .catch((error) => {
        console.log(error)
    })

module.exports = app

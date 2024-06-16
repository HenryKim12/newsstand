require("dotenv").config()
var cors = require("cors")

const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const articleRouter = require("./routers/articleRouter")
const headlineRouter = require("./routers/headlineRouter")
const authRouter = require("./routers/authRouter")
const userRouter = require("./routers/userRouter")
const cron_job = require("./services/newsService")
const mongoHelper = require("./database/mongoose.js")

const app = express()
app.use(cors());

// remove duplicates in db
app.get('/removeDuplicates', async (req, res) => {
    await mongoHelper.removeDuplicates();
    res.send("Dupicates removed");
  });

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const authenticateToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

// routers
app.use("/api/articles", articleRouter)
app.use("/api/headlines", headlineRouter)
app.use("/api", authRouter)
app.use("/api/user", userRouter)

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

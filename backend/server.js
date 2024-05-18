require("dotenv").config()
var cors = require("cors")

const express = require("express")
const metaRouter = require("./routers/metaRouter")

const app = express()
app.use(cors());

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routers
app.use("/api/meta", metaRouter)

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})


const mongoose = require("mongoose")
const request = require("supertest")
const app = require("../server")

require("dotenv").config()

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
  });
  
/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();  
});

describe("GET /api/headlines", () => {
    test("Get all headlines", async () => {
        const res = await request(app).get("/api/headlines")
        expect(res.statusCode).toBe(200)
    })

    test("Get headline by id", async () => {
        const res = await request(app).get("/api/headlines/66524e01ec4c78a16ecbe1b9")
        expect(res.statusCode).toBe(200)
        expect(res.body.author).toBe("NDTV Sports Desk")
    })
})

describe("POST /api/headlines", () => {
    test("Get headline by keyword q", async () => {
        const res = await request(app).post("/api/headlines").send({q: "Pope"})
        expect(res.statusCode).toBe(200)
        //expect(res.body.author).toBe("Kim Bellware")
    })
})

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

describe("GET /api/articles", () => {
    it("Get all articles", async () => {
        const res = await request(app).get("/api/articles");
        expect(res.statusCode).toBe(200)
        expect(res.body.length).toBe(428)
    })
    
    test("Get article by id", async () => {
        const res = await request(app).get("/api/articles/664e2f52236b4205604540f8")
        expect(res.statusCode).toBe(200)
        expect(res.body.title).toBe("title0")
    })
})

describe("POST /api/articles", () => {
    test("Get article by keyword query", async () => {
        const res = await request(app).post("/api/articles").send({q: "meta"})
        expect(res.statusCode).toBe(200)
        expect(res.body.title).toBe("title0")
    })
})

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
    
    })
    
    test("Get article by q", async () => {
    
    })
    
    test("Get article by source", async () => {
    
    })
})

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
    test("test", () => {
        
    })
})
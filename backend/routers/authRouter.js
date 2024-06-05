const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.createUser);
router.post("/login", authController.login);
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});
module.exports = router;
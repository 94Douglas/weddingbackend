const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

// const { protect } = require("../middleware/authMiddleware");

module.exports = router;

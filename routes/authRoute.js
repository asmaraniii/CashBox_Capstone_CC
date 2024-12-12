const express = require("express");
const { register, login, googleLogin } = require("../controllers/authController");
const verifyToken = require("../middleware/verifyToken"); // Middleware untuk verifikasi token

const router = express.Router();

// Rute untuk register dan login
router.post("/register", register);
router.post("/login", login);
router.post("/google-login", googleLogin);

// Rute yang membutuhkan autentikasi
router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({ 
    message: "Profile data", 
    uid: req.uid,
  });
});

module.exports = router;
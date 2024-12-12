const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Endpoint untuk mendapatkan data user berdasarkan UID
router.get("/:uid", userController.getUserByUid);

// Endpoint untuk mengupdate data user berdasarkan UID (UID di body)
router.put("/", userController.updateUserByUid);

// Endpoint untuk menambahkan data user baru
router.post("/", userController.addUserDetails);

module.exports = router;
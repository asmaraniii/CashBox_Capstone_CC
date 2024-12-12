const express = require("express");
const router = express.Router();
const tabunganController = require("../controllers/tabunganController");

// Tambah tabungan baru
router.post("/", tabunganController.addTabungan);

// Ambil semua tabungan berdasarkan goal
router.get("/goal/:goal_id", tabunganController.getTabunganByGoal);

// Ambil semua tabungan
router.get("/", tabunganController.getAllTabungan);

// Edit tabungan
router.put("/:id", tabunganController.updateTabungan);

// Hapus tabungan
router.delete("/:id", tabunganController.deleteTabungan);

module.exports = router;
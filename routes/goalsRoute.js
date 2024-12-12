const express = require("express");
const router = express.Router();
const goalsController = require("../controllers/goalsController");

// Tambah goal baru
router.post("/", goalsController.addGoal);

// Edit goal
router.put("/:id", goalsController.updateGoal);

// Hapus goal
router.delete("/:id", goalsController.deleteGoal);

// Ambil semua goals
router.get("/", goalsController.getAllGoals);

// Ambil goal berdasarkan ID
router.get("/:id", goalsController.getGoalById);

module.exports = router;
const express = require("express");
const router = express.Router();
const pengeluaranController = require("../controllers/pengeluaranController"); // Pastikan path ini benar

// Rute untuk menangani pengeluaran
// Menambahkan pengeluaran baru
router.post("/", pengeluaranController.createPengeluaran);

// Mengambil semua pengeluaran
router.get("/", pengeluaranController.getAllPengeluaran);

// Mengambil pengeluaran berdasarkan ID
router.get("/:id_pengeluaran", pengeluaranController.getPengeluaranById);

// Mengupdate pengeluaran berdasarkan ID
router.put("/:id_pengeluaran", pengeluaranController.updatePengeluaran);

// Menghapus pengeluaran berdasarkan ID
router.delete("/:id_pengeluaran", pengeluaranController.deletePengeluaran);

module.exports = router;
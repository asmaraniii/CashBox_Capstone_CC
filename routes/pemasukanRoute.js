const express = require("express");
const router = express.Router();
const pemasukanController = require("../controllers/pemasukanController");

// Rute untuk menangani pemasukan
router.post("/", async (req, res, next) => {
    // Check if UID and nama_sumber_uang are present in the body
    const { uid, nama_sumber_uang } = req.body;
    if (!uid || !nama_sumber_uang) {
        return res.status(400).json({ message: "UID dan nama sumber_uang harus disertakan dalam permintaan" });
    }
    next();  // Pass control to the next middleware
}, pemasukanController.createPemasukan); // Menambahkan pemasukan baru

router.get("/", pemasukanController.getAllPemasukan);  // Mengambil semua pemasukan
router.get("/:id_pemasukan", pemasukanController.getPemasukanById); // Mengambil pemasukan berdasarkan ID
router.put("/:id_pemasukan", pemasukanController.updatePemasukan); // Mengupdate pemasukan
router.delete("/:id_pemasukan", pemasukanController.deletePemasukan); // Menghapus pemasukan

module.exports = router;
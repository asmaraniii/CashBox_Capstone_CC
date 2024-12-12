const express = require("express");
const { addWallet, getAllWallets, updateWalletName, getWalletById, deleteWallet } = require("../controllers/walletController");
const validateId = require("../middleware/validateId");
const router = express.Router();

// Tambahkan wallet
router.post("/", async (req, res, next) => {
    // Tambahkan check untuk body
    const { uid } = req.body;
    if (!uid) {
        return res.status(400).json({ message: "UID harus disertakan dalam permintaan" });
    }
    next();  // Lanjutkan ke controller
}, addWallet);

// Ambil semua wallet
router.get("/", getAllWallets);

// Ambil wallet berdasarkan ID
router.get("/:id", validateId, getWalletById);

// Perbarui nama wallet
router.put("/:id", validateId, updateWalletName);

// Hapus wallet berdasarkan ID
router.delete("/:id", validateId, deleteWallet);

module.exports = router;
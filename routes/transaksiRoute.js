const express = require("express");
const router = express.Router();
const transaksiController = require("../controllers/transaksiController");

// Rute untuk mengambil semua transaksi
router.get("/transaksi", transaksiController.getAllTransaksi);

// Rute untuk mengambil semua transaksi berdasarkan bulan dan tahun
router.get("/bulan", transaksiController.getTransaksiByBulan);

// Route untuk mengambil total saldo pemasukan
router.get("/total-pemasukan", transaksiController.getTotalPemasukan);

// Route untuk mengambil total saldo pemasukan per bulan
router.get("/total-pemasukan-bulan", transaksiController.getTotalPemasukanPerBulan);

// Route untuk mengambil total saldo pengeluaran per bulan
router.get("/total-pengeluaran-bulan", transaksiController.getTotalPengeluaranPerBulan);

// Route untuk mengambil total saldo pengeluaran
router.get("/total-pengeluaran", transaksiController.getTotalPengeluaran);

module.exports = router;
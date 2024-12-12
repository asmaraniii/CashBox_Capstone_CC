const db = require("../config/db"); // Pastikan menggunakan koneksi database yang benar

// Mengambil semua data transaksi (pemasukan dan pengeluaran)
// Mengambil semua data transaksi (pemasukan dan pengeluaran)
exports.getAllTransaksi = async (req, res) => {
    try {
        const query = `
            SELECT 
                'pemasukan' AS tipe, p.*, w.uid AS wallet_uid 
            FROM pemasukan p
            LEFT JOIN wallet w ON p.sumber_uang = w.id
            UNION
            SELECT 
                'pengeluaran' AS tipe, pg.*, w.uid AS wallet_uid 
            FROM pengeluaran pg
            LEFT JOIN wallet w ON pg.sumber_uang = w.id
            ORDER BY tanggal DESC
        `;
        const [rows] = await db.query(query);
        res.status(200).json({
            message: "Data transaksi berhasil diambil",
            data: rows.map(row => ({
                ...row,
                uid: row.wallet_uid // Tambahkan uid pada setiap transaksi
            }))
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
};

// Mengambil total saldo pemasukan
exports.getTotalPemasukan = async (req, res) => {
    try {
        const query = `
            SELECT SUM(nominal) AS total_pemasukan 
            FROM pemasukan
        `;
        const [totalPemasukan] = await db.query(query);

        // Mengirimkan total saldo pemasukan
        res.status(200).json({
            message: "Total saldo pemasukan berhasil diambil",
            total_pemasukan: totalPemasukan[0].total_pemasukan || 0,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal mengambil total saldo pemasukan",
            error: error.message,
        });
    }
};

// Mengambil total saldo pengeluaran
exports.getTotalPengeluaran = async (req, res) => {
    try {
        const query = `
            SELECT SUM(nominal) AS total_pengeluaran 
            FROM pengeluaran
        `;
        const [totalPengeluaran] = await db.query(query);

        // Mengirimkan total saldo pengeluaran
        res.status(200).json({
            message: "Total saldo pengeluaran berhasil diambil",
            total_pengeluaran: totalPengeluaran[0].total_pengeluaran || 0,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal mengambil total saldo pengeluaran",
            error: error.message,
        });
    }
};

// Mengambil total saldo pemasukan per bulan
exports.getTotalPemasukanPerBulan = async (req, res) => {
    const { bulan, tahun } = req.query;

    // Validasi parameter bulan dan tahun
    if (!bulan || !tahun) {
        return res.status(400).json({ message: "Bulan dan tahun wajib disertakan dalam query parameter." });
    }

    try {
        const query = `
            SELECT SUM(nominal) AS total_pemasukan 
            FROM pemasukan
            WHERE MONTH(tanggal) = ? AND YEAR(tanggal) = ?
        `;
        const [totalPemasukan] = await db.query(query, [bulan, tahun]);

        // Mengirimkan total saldo pemasukan per bulan
        res.status(200).json({
            message: `Total saldo pemasukan untuk bulan ${bulan} dan tahun ${tahun} berhasil diambil`,
            total_pemasukan: totalPemasukan[0].total_pemasukan || 0,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal mengambil total saldo pemasukan per bulan",
            error: error.message,
        });
    }
};

// Mengambil total saldo pengeluaran per bulan
exports.getTotalPengeluaranPerBulan = async (req, res) => {
    const { bulan, tahun } = req.query;

    // Validasi parameter bulan dan tahun
    if (!bulan || !tahun) {
        return res.status(400).json({ message: "Bulan dan tahun wajib disertakan dalam query parameter." });
    }

    try {
        const query = `
            SELECT SUM(nominal) AS total_pengeluaran 
            FROM pengeluaran
            WHERE MONTH(tanggal) = ? AND YEAR(tanggal) = ?
        `;
        const [totalPengeluaran] = await db.query(query, [bulan, tahun]);

        // Mengirimkan total saldo pengeluaran per bulan
        res.status(200).json({
            message: `Total saldo pengeluaran untuk bulan ${bulan} dan tahun ${tahun} berhasil diambil`,
            total_pengeluaran: totalPengeluaran[0].total_pengeluaran || 0,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal mengambil total saldo pengeluaran per bulan",
            error: error.message,
        });
    }
};

// Mengambil transaksi berdasarkan bulan dan tahun
exports.getTransaksiByBulan = async (req, res) => {
    const { bulan, tahun } = req.query;

    if (!bulan || !tahun) {
        return res.status(400).json({ message: "Bulan dan tahun wajib disertakan dalam query parameter." });
    }

    try {
        const query = `
            SELECT id_pemasukan AS id_transaksi, deskripsi, nominal, sumber_uang AS sumber, 
                   tanggal, kategori_masuk AS kategori, 'pemasukan' AS tipe, uid
            FROM pemasukan
            WHERE MONTH(tanggal) = ? AND YEAR(tanggal) = ?
            UNION
            SELECT id_pengeluaran AS id_transaksi, deskripsi, nominal, sumber_uang AS sumber,
                   tanggal, kategori_keluar AS kategori, 'pengeluaran' AS tipe, uid
            FROM pengeluaran
            WHERE MONTH(tanggal) = ? AND YEAR(tanggal) = ?
            ORDER BY tanggal DESC;
        `;
        const [rows] = await db.query(query, [bulan, tahun, bulan, tahun]);

        if (rows.length === 0) {
            return res.status(404).json({
                message: `Tidak ada transaksi ditemukan untuk bulan ${bulan} dan tahun ${tahun}.`
            });
        }

        res.status(200).json({
            message: "Data transaksi berhasil diambil",
            data: rows,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal mengambil data transaksi",
            error: error.message,
        });
    }
};
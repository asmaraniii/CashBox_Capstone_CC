const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoute"); 
const pemasukanRoute = require("./routes/pemasukanRoute");
const pengeluaranRoute = require("./routes/pengeluaranRoute");
const walletRoute = require('./routes/walletRoute');
const transaksiRoute = require('./routes/transaksiRoute');
const userRoute = require("./routes/userRoute");
const goalsRoute = require('./routes/goalsRoute');
const tabunganRoute = require('./routes/tabunganRoute');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route untuk mengecek status server
app.get("/", (req, res) => {
  console.log("Received request to root endpoint");
  res.status(200).json({ message: "Server is running!" });
});  

// Rute untuk autentikasi (login, register, dll)
app.use("/api/auth", authRoute);

// Route untuk user
app.use("/api/user", userRoute);

// Rute untuk pemasukan
app.use("/api/pemasukan", pemasukanRoute);

// Rute untuk pengeluaran
app.use("/api/pengeluaran", pengeluaranRoute);

// Rute untuk wallet
app.use("/api/wallet", walletRoute);

// Menambahkan rute transaksi
app.use("/api/transaksi", transaksiRoute);

// Menambahkan rute goals
app.use("/api/goals", goalsRoute);

// Menambahkan rute tabungan
app.use("/api/tabungan", tabunganRoute);

// Middleware error handling
app.use((err, req, res, next) => {
  console.error("Error:", err.message || err);
  res.status(500).json({ message: err.message || "Something went wrong" });
});

// Menjalankan server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
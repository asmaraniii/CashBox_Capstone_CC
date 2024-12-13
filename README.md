# Cashbox API
This API provides an endpoint for managing users, expenses, income, wallets, budgeting, and setting goals for the Cashbox app using Firebase, MySQL, Nodejs, and Google Cloud.

## Endpoints
- **Register**
Endpoint: 
```/api/auth/register```
Method: 
```POST```
Body Example
```sh
{ 
    "email": "eryutamii9@gmail.com", 
    "password": "123456", 
    "name": "Ery" 
}
```
- **Login**
Endpoint: 
```/api/auth/login```
Method: 
```POST```
Body Example
```sh
{ 
    "email": "eryutamii9@gmail.com", 
    "password": "123456" 
}
```
- **Login with Google**
Endpoint: 
```/api/auth/google-login```
Method: 
```POST```
Body Example
```sh
{
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJkMGFlMTRkMjhkMTY1NzhiMzFjOGJlNmM4ZmRlZDM0ZDVlMWExYzEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQWRyaWFuIFNlcHRpeWFkaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJaUY5UEdUdHhIbmZnZ0ZSU19zVEczQTlDcFRTVFFKRWFKWlcxMVJRNkk2cTlpNGFJPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Nhc2hib3gtMzc3ZTMiLCJhdWQiOiJjYXNoYm94LTM3N2UzIiwiYXV0aF90aW1lIjoxNzM0MDY4NzA3LCJ1c2VyX2lkIjoiSlloVVoyZ2hVVlAxMjVHQ1FRcFNxUnNnNmRWMiIsInN1YiI6IkpZaFVaMmdoVVZQMTI1R0NRUXBTcVJzZzZkVjIiLCJpYXQiOjE3MzQwNjg3MDgsImV4cCI6MTczNDA3MjMwOCwiZW1haWwiOiJhZHJpYW5zZXB0aXlhZGlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTY0MjcyMzE2MDg2Njk2MDk2ODciXSwiZW1haWwiOlsiYWRyaWFuc2VwdGl5YWRpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.HhHxCXmVSDCr8ptx3WowwUFetXdlXOVRWgc8w5ftrAiFIIj0erd3qdNd-r2gRBYLYR6d3t5P2Rdm9DQinpus95nSBeu43K-hvxpYHcVRbop--Ug5CHECBmBQncYZ5KSFDaTq_4YPNSxuFa2JQ8ZdlWpZlGkv-snNIsoDBFwG4J3h1FUhgdox894YL-_mhf3cTLWp61lXQT_E_CyyM7jLM5Pv_Tq1HNl_rBChtovPnkQ5AbJt4Z4w0uQu-xeaFZTlpV7nKONoOZmMqlp3OtUoLu5_B_qKGzRgT3tOQ2-iXreFm4ItDjIPSefximpkBfSg4Q_fp685nKCfm-boFdUUfg"
}
```
- **Pemasukan**
Endpoint: 
```/api/pemasukan```
Method: 
```POST```
Body Example
```sh
{
    "deskripsi": "Pemasukan",
    "nominal": "350000",
    "kategori_masuk": 1,
    "tanggal": "2024-12-12",
    "fk_sumber_uang": 19,
    "uid": "JYhUZ2ghUVP125GCQQpSqRsg6dV2",
    "nama_sumber_uang": "Uang"
}
```
- **Pemasukan**
Endpoint: 
```/api/pemasukan/:id pemasukan```
Method: 
```PUT```
Body Example
```sh
{
    "deskripsi": "Pemasukan",
    "nominal": "350000",
    "fk_sumber_uang": 19,
    "tanggal": "2024-12-12",
    "kategori_masuk": 1,
    "uid": "JYhUZ2ghUVP125GCQQpSqRsg6dV2",
    "nama_sumber_uang": "Uang Contoh"
}
```
- **Pemasukan**
Endpoint: 
```/api/pemasukan```
Method: 
```GET```
- **Pemasukan**
Endpoint: 
```/api/pemasukan/:id pemasukan```
Method: 
```GET```
- **Pemasukan**
Endpoint: 
```/api/pemasukan/:id pemasukan```
Method: 
```DELETE```
- **Pengeluaran**
Endpoint: 
```/api/pengeluaran```
Method: 
```POST```
Body Example
```sh
{
    "deskripsi": "Pengeluaran",
    "nominal": "10000",
    "sumber_uang": 16,
    "tanggal": "2024-12-12",
    "kategori_keluar": 14,
    "uid": "JYhUZ2ghUVP125GCQQpSqRsg6dV2",
    "nama_sumber_uang": "Uang"
}
```
- **Pengeluaran**
Endpoint: 
```/api/pengeluaran/:id pengeluaran```
Method: 
```PUT```
Body Example
```sh
{
    "deskripsi": "Pengeluaran",
    "nominal": "10000",
    "sumber_uang": 16,
    "tanggal": "2024-12-12",
    "kategori_keluar": 14,
    "uid": "JYhUZ2ghUVP125GCQQpSqRsg6dV2",
    "nama_sumber_uang": "Uang Makan"
}
```
- **Pengeluaran**
Endpoint: 
```/api/pengeluaran```
Method: 
```GET```
- **Pengeluaran**
Endpoint: 
```/api/pengeluaran/:id pengeluaran```
Method: 
```GET```
- **Pengeluaran**
Endpoint: 
```/api/pengeluaran/:id pengeluaran```
Method: 
```DELETE```
- **Transaksi**
Endpoint: 
```/api/transaksi/transaksi```
Method: 
```GET```
- **Transaksi**
Endpoint: 
```/api/transaksi/bulan?bulan=...&tahun=...```
Method: 
```GET```
- **Transaksi**
Endpoint: 
```/api/transaksi/total-pemasukan```
Method: 
```GET```
- **Transaksi**
Endpoint: 
```/api/transaksi/total-pengeluaran```
Method: 
```GET```
- **Transaksi**
Endpoint: 
```/api/transaksi/total-pemasukan-bulan?bulan=...&tahun=...```
Method: 
```GET```
- **Transaksi**
Endpoint: 
```/api/transaksi/total-pengeluaran-bulan?bulan=...&tahun=...```
Method: 
```GET```
- **Wallet**
Endpoint: 
```/api/wallet```
Method: 
```POST```
Body Example
```sh
{
    "nama": "Uang",
    "nominal": 100000,
    "uid": "JYhUZ2ghUVP125GCQQpSqRsg6dV2"
}
```
- **Wallet**
Endpoint: 
```/api/wallet```
Method: 
```GET```
- **Wallet**
Endpoint: 
```/api/wallet/:id```
Method: 
```GET```
- **Wallet**
Endpoint: 
```/api/wallet/:id```
Method: 
```PUT```
Body Example
```sh
{
    "nama": "Uang Cadangan"
}
```
- **Wallet**
Endpoint: 
```/api/wallet/:id```
Method: 
```DELETE```
- **Goals**
Endpoint: 
```/api/goals```
Method: 
```POST```
Body Example
```sh
{
    "nama": "liburan",
    "nominal": 1000000,
    "tgl_tercapai": "2025-01-01",
    "uid": "bACjWKv1etU4xsq65NgJpjZ9m1F3"
}
```
- **Goals**
Endpoint: 
```/api/goals/:id```
Method: 
```PUT```
Body Example
```sh
{
    "nama": "liburan luar kota",
    "nominal": "1000000",
    "tgl_tercapai": "2024-12-31",
    "uid": "bACjWKv1etU4xsq65NgJpjZ9m1F3"
}
```
- **Goals**
Endpoint: 
```/api/goals/:id```
Method: 
```DELETE```
- **Goals**
Endpoint: 
```/api/goals```
Method: 
```GET```
- **Tabungan**
Endpoint: 
```/api/tabungan```
Method: 
```POST```
Body Example
```sh
{
    "deskripsi": "nabung",
    "nominal": 50000,
    "tgl_tabung": "2024-12-12",
    "goal_id": 4,
    "uid": "JYhUZ2ghUVP125GCQQpSqRsg6dV2"
}
```
- **Tabungan**
Endpoint: 
```/api/tabungan/goal/:id goal?uid=...```
Method: 
```GET```
- **Tabungan**
Endpoint: 
```/api/tabungan/:id```
Method: 
```PUT```
Body Example
```sh
{
    "deskripsi": "nabung",
    "nominal": 100000,
    "tgl_tabung": "2024-12-12",
    "goal_id": 4,
    "uid": "JYhUZ2ghUVP125GCQQpSqRsg6dV2"
}
```
- **Tabungan**
Endpoint: 
```/api/tabungan/:id?uid=...```
Method: 
```DELETE```
- **Tabungan**
Endpoint: 
```/api/tabungan```
Method: 
```GET```
- **User**
Endpoint: 
```/api/user```
Method: 
```POST```
Body Example
```sh
{
    "uid": "bACjWKv1etU4xsq65NgJpjZ9m1F3",
    "tgl_lahir": "2000-01-01",
    "no_telp": "088999777666",
    "gender": "P"
}
```
- **User**
Endpoint: 
```/api/user/uid```
Method: 
```GET```
- **User**
Endpoint: 
```/api/user```
Method: 
```PUT```
Body Example
```sh
{
    "uid": "bACjWKv1etU4xsq65NgJpjZ9m1F3",
    "tgl_lahir": "2000-01-01",
    "no_telp": "088999777665",
    "gender": "P"
}
```
- **Budgeting**
Endpoint: 
```/api/budgeting```
Method: 
```POST```
Body Example
```sh
{
    "nominal": 100000,
    "kategori": 14,
    "urgensi": "0.80",
    "uid": "bACjWKv1etU4xsq65NgJpjZ9m1F3"
}
```
- **Budgeting**
Endpoint: 
```/api/budgeting/:id```
Method: 
```PUT```
Body Example
```sh
{
    "nominal": "50000",
    "kategori": 1,
    "urgensi": "0.70",
    "uid": "bACjWKv1etU4xsq65NgJpjZ9m1F3"
}
```
- **Budgeting**
Endpoint: 
```/api/budgeting/:id```
Method: 
```DELETE```
- **Budgeting**
Endpoint: 
```/api/budgeting```
Method: 
```GET```

## Cloud Computing Team

| ID | Name |
| ------ | ------ |
| C200B4KX1288	 | Ery Utami |
| C200B4KX0702 | Asmarani Intan Prawesti |

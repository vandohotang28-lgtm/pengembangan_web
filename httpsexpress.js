const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3443;

// Halaman utama
app.get('/', (req, res) => {
  res.send('Halo! Server HTTPS dengan Express.js berhasil dijalankan.');
});

// Sertifikat dan private key diperlukan agar HTTPS dapat berjalan.
// Buat file key.pem dan cert.pem terlebih dahulu.
const keyPath = path.join(__dirname, 'key.pem');
const certPath = path.join(__dirname, 'cert.pem');

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.error('File key.pem atau cert.pem belum ditemukan.');
  console.error('Buat sertifikat terlebih dahulu, lalu jalankan kembali server.');
  process.exit(1);
}

const options = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath)
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server HTTPS berjalan di https://localhost:${PORT}`);
});

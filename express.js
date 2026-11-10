const express = require('express');

const app = express();
const PORT = 3000;

// Halaman utama
app.get('/', (req, res) => {
  res.send('Halo! Server Express.js berhasil dijalankan.');
});

// Contoh route tambahan
app.get('/about', (req, res) => {
  res.send('Ini adalah halaman About.');
});

app.listen(PORT, () => {
  console.log(`Server HTTP berjalan di http://localhost:${PORT}`);
});

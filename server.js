const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/predict', (req, res) => {
    const { luasLahan, jenisTanaman } = req.body;

    // Contoh logika prediksi sederhana
    let dosisPupuk;
    if (jenisTanaman === 'Padi') {
        dosisPupuk = luasLahan * 100; // Misal 100 kg per hektar
    } else if (jenisTanaman === 'Jagung') {
        dosisPupuk = luasLahan * 150; // Misal 150 kg per hektar
    } else {
        dosisPupuk = luasLahan * 50; // Default untuk tanaman lain
    }

    res.json({ dosisPupuk });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
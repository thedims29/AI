document.getElementById('predictionForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const luasLahan = document.getElementById('luasLahan').value;

    const jenisTanaman = document.getElementById('jenisTanaman').value;

    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ luasLahan, jenisTanaman }),
    });
    
    const result = await response.json();
    document.getElementById('result').innerText = `Dosis Pupuk yang Diperlukan: ${result.dosisPupuk} kg`;
});
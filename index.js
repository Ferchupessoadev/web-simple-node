const express = require('express');
const app = express();
const PORT = 3000;

// Configuración de las rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});


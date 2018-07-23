const path = require('path');
const express = require('express');
const app = express();
const distPath = path.join(__dirname, 'dist');
const dataPath = path.join(__dirname, 'data');
const port = process.env.PORT || 3000;

app.use(express.static(distPath));
app.use(express.static(dataPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running');
});
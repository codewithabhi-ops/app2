const express = require('express');
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.send('Hello from App 2!');
});

app.listen(PORT, () => {
  console.log(`App 2 listening on port ${PORT}`);
});


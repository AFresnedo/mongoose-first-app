const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('landing reached');
});

app.listen(3000);

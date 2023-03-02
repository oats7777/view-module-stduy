const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  // json send
  res.json([
    {
      name: 'toss',
    },
    {
      name: 'toss2',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}!`);
});

const express = require('express');
const connect = require('./db');

const app = express();
const port = 3000;

app.get('/connect', async (req, res) => {
  const db = await connect();
  res.status(db.statusCode).json(db.mesg);
});

app.get('/tb_*', async (req, res) => {
    console.log(req.pathname);
    const db = await connect();
    res.status(db.statusCode).json(db.mesg);
  });
  
  app.get('/', async (req, res) => {
    res.status(200).json({mesg:"Hi Azmal"});
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


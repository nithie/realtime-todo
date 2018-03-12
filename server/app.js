const express = require('express');

const path = require('path');

const app = express();

app.use(require('body-parser').json());

const clientPath = path.resolve(__dirname, '..', 'dist');

app.use(express.static(clientPath));

app.use('/api', require('./api'));

app.use((req, res) => {
  res.status(404).send({ error: 'Resource not found' });
});

module.exports = app;

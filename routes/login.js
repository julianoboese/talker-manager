const express = require('express');
const randomstring = require('randomstring');

const routes = express.Router();

routes.post('/', (_req, res) => {
  const token = randomstring.generate(16);
  console.log(token);
  res.status(200).json({ token });
});

module.exports = routes;

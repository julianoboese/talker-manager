const express = require('express');
const randomstring = require('randomstring');
const { loginValidation } = require('../middlewares');

const routes = express.Router();

routes.post('/', loginValidation, (_req, res) => {
  const token = randomstring.generate(16);
  res.status(200).json({ token });
});

module.exports = routes;

const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const talkerData = await fs.readFile(path.join(__dirname, '..', 'talker.json'), 'utf-8');
  res.status(200).json(JSON.parse(talkerData));
});

module.exports = routes;

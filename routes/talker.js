const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const routes = express.Router();

async function readTalkerData() {
  const talkerData = await fs.readFile(path.join(__dirname, '..', 'talker.json'), 'utf-8');
  return JSON.parse(talkerData);
}

routes.get('/', async (_req, res) => {
  const talkerData = await readTalkerData();
  res.status(200).json(talkerData);
});

module.exports = routes;

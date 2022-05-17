const path = require('path');
const fs = require('fs').promises;

async function readTalkerData() {
  const talkerData = await fs.readFile(path.join(__dirname, '..', 'talker.json'), 'utf-8');
  return JSON.parse(talkerData);
}

module.exports = readTalkerData;

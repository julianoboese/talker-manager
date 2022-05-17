const path = require('path');
const fs = require('fs').promises;

async function writeTalkerData(talkerData) {
  await fs.writeFile(path.join(__dirname, '..', 'talker.json'),
      JSON.stringify(talkerData));
}

module.exports = writeTalkerData;

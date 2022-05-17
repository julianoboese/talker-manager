const tokenValidation = require('./tokenValidation');
const talkerValidation = require('./talkerValidation');
const { talkValidation, watchedAtValidation, rateValidation } = require('./talkValidation');

module.exports = {
  tokenValidation,
  talkerValidation,
  talkValidation,
  watchedAtValidation, 
  rateValidation,
};

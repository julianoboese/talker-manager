const loginValidation = require('./loginValidation');
const tokenValidation = require('./tokenValidation');
const talkerValidation = require('./talkerValidation');
const { talkValidation, watchedAtValidation, rateValidation } = require('./talkValidation');

module.exports = {
  loginValidation,
  tokenValidation,
  talkerValidation,
  talkValidation,
  watchedAtValidation, 
  rateValidation,
};

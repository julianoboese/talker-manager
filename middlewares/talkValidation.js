function talkValidation(req, res, next) {
  const { talk } = req.body;
  const { watchedAt, rate } = talk || {};

  if (!talk || !watchedAt || rate === undefined) {
    return res.status(400).json(
      { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
    ); 
  }

  next();
}

function watchedAtValidation(req, res, next) {
  const { talk: { watchedAt } } = req.body;

  // https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy
  const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;
  if (!dateRegex.test(watchedAt)) {
    return res.status(400).json(
      { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
    ); 
  }

  next();
}

function rateValidation(req, res, next) {
  const { talk: { rate } } = req.body;

  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }); 
  }

  next();
}

module.exports = { talkValidation, watchedAtValidation, rateValidation };

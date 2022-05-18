const express = require('express');
const { readTalkerData, writeTalkerData } = require('../utils');
const {
  tokenValidation,
  talkerValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
} = require('../middlewares');

const routes = express.Router();

routes.get('/', async (_req, res) => {
  const talkerData = await readTalkerData();
  res.status(200).json(talkerData);
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;

  const talkerData = await readTalkerData();
  const selectedTalker = talkerData.find((talker) => talker.id === parseInt(id, 10));

  if (!selectedTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
  }

  res.status(200).json(selectedTalker);
});

const validation = [
  tokenValidation, 
  talkerValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
];

routes.post('/', validation, async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const talkerData = await readTalkerData();

    const newTalker = {
      id: talkerData.length + 1,
      name,
      age,
      talk: { watchedAt, rate },
    };

    await writeTalkerData([...talkerData, newTalker]);

    res.status(201).json(newTalker);
  });

module.exports = routes;

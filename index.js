const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger.json');
const { talkerRoutes, loginRoutes } = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || 3000;

app.use('/login', loginRoutes);
app.use('/talker', talkerRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

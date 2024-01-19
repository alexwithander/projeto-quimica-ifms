const loginRoute = require('./loginRoute');
const eventosRoute = require('./eventosRoute');
const docentesRoute = require('./docentesRoute');
const verificarToken = require('./verificarToken');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./db/connection');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'SECRET_KEY';

app.use(bodyParser.json());

app.use('/api/login', loginRoute);
app.use('/api/eventos', verificarToken, eventosRoute);
app.use('/api/docentes', verificarToken, docentesRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 
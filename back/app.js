const loginRoute = require('./loginRoute');
const eventosRoute = require('./eventosRoute');
const docentesRoute = require('./docentesRoute');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./db/connection');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'SECRET_KEY';

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }

    const user = results[0];


  if (user) {
    // Gera um token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '2h' });
    console.log('Token Gerado:', token);

    res.json({ mensagem: 'Login bem-sucedido', token });
  } else {
    res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }
  });
});

/* REMOVIDO TEMPORARIAMENTE (BUG)
// Função para verificar o token
function verificarToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('Erro na verificação do token:', err);
      return res.status(401).json({ mensagem: 'Token inválido' });
    }

    req.userId = decoded.userId;
    next();
  });
} */

app.use('/api/login', loginRoute);
app.use('/api/eventos', eventosRoute);
app.use('/api/docentes', docentesRoute);



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 
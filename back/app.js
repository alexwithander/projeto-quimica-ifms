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
app.post('/api/adicionarEvento', /* verificarToken, */ (req, res) => {
  const novoEvento = {
    evento: req.body.evento,
    organizador: req.body.organizador,
    data: req.body.data,
  };

  /// Adiciona o novo evento ao banco de dados
  db.query('INSERT INTO eventos (evento, organizador, data) VALUES (?, ?, ?)', 
    [novoEvento.evento, novoEvento.organizador, novoEvento.data], (err, result) => {
      if (err) {
        console.error('Erro ao adicionar evento:', err);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
      }

      novoEvento.id = result.insertId;

      res.json({ mensagem: 'Evento adicionado com sucesso', evento: novoEvento });
  });
});

// Rota para listar todos os eventos
app.get('/api/listarEventos', /* verificarToken, */ (req, res) => {
  // Consulta a banco de dados para obter a lista de eventos
  db.query('SELECT * FROM eventos', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }

    const eventos = results;

    res.json({ eventos });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
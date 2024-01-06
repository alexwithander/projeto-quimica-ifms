const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;
const SECRET_KEY = 'SECRET_KEY';

app.use(bodyParser.json());

// Array de exemplo para simular eventos
const eventos = [];

// Simulação de um banco de dados
const users = [
  { id: 1, username: 'usuario1', password: 'senha123' },
  { id: 2, username: 'usuario2', password: 'senha456' }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Simulação de autenticação
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Gera um token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '2h' });

    res.json({ mensagem: 'Login bem-sucedido', token });
  } else {
    res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }
});

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
}

// Rota protegida com token do login para adicionar eventos
app.post('/api/adicionarEvento', verificarToken, (req, res) => {
  const novoEvento = {
    evento: req.body.evento,
    organizador: req.body.organizador,
    data: req.body.data,
    status: req.body.status,
  };

  // Adiciona o novo evento ao array de eventos
  eventos.push(novoEvento);

  res.json({ mensagem: 'Evento adicionado com sucesso', evento: novoEvento });
});

// Rota para listar todos os eventos
app.get('/api/listarEventos', (req, res) => {
  res.json({ eventos });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

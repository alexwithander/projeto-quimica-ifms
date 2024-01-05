const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', true);


  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  next();
});

// Rota de autenticação
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Simulação de autenticação
  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, 'secreto', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Rota verificação
app.get('/api/protegida', verificarToken, (req, res) => {
  res.json({ message: 'Rota protegida alcançada!' });
});

// Função para verificar o token
function verificarToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token ausente' });
  }

  jwt.verify(token, 'secreto', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = decoded;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Servidor está na porta ${PORT}`);
});

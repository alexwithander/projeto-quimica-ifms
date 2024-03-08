const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('./db/connection');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }

    const user = results[0];

    if (user) {
      // Gera um token
      const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '2h' });
      console.log('Token Gerado:', token);

      res.json({ mensagem: 'Login bem sucedido', token });
    } else {
      res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }
  });
});


module.exports = router;
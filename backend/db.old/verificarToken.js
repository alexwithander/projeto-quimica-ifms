const jwt = require('jsonwebtoken');
const SECRET_KEY = 'SECRET_KEY';

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

module.exports = verificarToken;
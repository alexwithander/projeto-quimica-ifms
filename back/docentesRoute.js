const express = require('express');
const db = require('./db/connection');
const router = express.Router();
const verificarToken = require('./verificarToken');

//Rota
router.post('/adicionarDocente', verificarToken, (req, res) => {
  const novoDocente = {
    nome: req.body.nome,
    titulo: req.body.titulo,
    avatar_url: req.body.avatar_url,
    lates: req.body.lates,
  };

  //Add novo docente
  db.query('INSERT INTO docentes (nome, titulo, avatar_url, lates) VALUES (?, ?, ?, ?)', 
    [novoDocente.nome, novoDocente.titulo, novoDocente.avatar_url, novoDocente.lates], (err, result) => {
      if (err) {
        console.error('Erro ao adicionar docente:', err);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
      }

      novoDocente.id = result.insertId;

      res.json({ mensagem: 'Docente adicionado com sucesso', docente: novoDocente });
  });
});


module.exports = router;

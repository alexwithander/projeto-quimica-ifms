const express = require('express');
const db = require('./db/connection');
const router = express.Router();

// Rota
router.post('/adicionarEvento', (req, res) => {
  const novoEvento = {
    evento: req.body.evento,
    organizador: req.body.organizador,
    data: req.body.data,
  };

  // Add novo evento no banco
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

// Rota listar
router.get('/listarEventos', (req, res) => {
  db.query('SELECT * FROM eventos', (err, results) => {
    if (err) {
      console.error('Erro na consulta ao banco de dados:', err);
      return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }

    const eventos = results;

    res.json({ eventos });
  });
});

module.exports = router;

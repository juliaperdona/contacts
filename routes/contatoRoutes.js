const express = require('express');
const ContatoController = require('../controllers/contatoController');
const { validateContato } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/contatos', validateContato, ContatoController.create);
router.get('/contatos', ContatoController.findAll);
router.patch('/contatos/:id', validateContato, ContatoController.update);
router.delete('/contatos/:id', ContatoController.delete);

module.exports = router;
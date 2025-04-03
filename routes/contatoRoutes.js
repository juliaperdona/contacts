import { Router } from 'express';
import ContatoController from '../controllers/contatoController.js';
import { validateContato } from '../middlewares/validationMiddleware.js';

const router = Router();

router.post('/', validateContato, ContatoController.create);
router.get('/', ContatoController.findAll);
router.patch('/:id', validateContato, ContatoController.update);
router.delete('/:id', ContatoController.delete);

export default router;
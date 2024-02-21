import express from 'express'
import UsuarioController from '../controllers/usuarioController.js'

let router = express.Router();

let ctrl = new UsuarioController();
router.get('/', ctrl.listar);
router.get('/:id', ctrl.obter);
router.post('/', ctrl.criar);
router.delete('/excluir/:id', ctrl.excluir);

export default router;
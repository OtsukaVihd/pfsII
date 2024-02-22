import express from 'express';
import PerfilController from '../controllers/perfilController.js';

let ctrl = new PerfilController();
const router = express.Router();

router.get('/', (req, res) => {
    // #swagger.tags = ['Perfil']
    // #swagger.summary = 'Lista os perfis cadastrados'
    ctrl.listar(req, res);
});


export default router;
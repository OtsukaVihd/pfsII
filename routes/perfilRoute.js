import express from 'express';
import PerfilController from '../controllers/perfilController.js';
import Autenticacao from '../middleware/autenticacao.js';

let ctrl = new PerfilController();
const router = express.Router();
let auth = new Autenticacao();

router.get('/', auth.validar, (req, res) => {
    // #swagger.tags = ['Perfil']
    // #swagger.summary = 'Lista os perfis cadastrados'
    /* #swagger.security = [{
        apiKeyAuth: []
    }]
    */
    ctrl.listar(req, res);
});


export default router;
import express from 'express';
import loginController from '../controllers/loginController.js';

let ctrl = new loginController();
const router = express.Router();

router.post('/autenticar/', (req, res) => {
    // #swagger.tags = ['Autenticar']
    // #swagger.summary = 'Autentica um usuário'
    ctrl.autenticar(req, res);    
});


export default router;
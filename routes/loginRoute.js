import express from 'express';
import loginController from '../controllers/loginController.js';

let ctrl = new loginController();
const router = express.Router();

router.post('/autenticar/', (req, res) => {
    // #swagger.tags = ['Login']
    // #swagger.summary = 'Autentica um usuário'
    /* #swagger.requestBody = {
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/loginModel" }
            }
        }

    }
    */
    ctrl.autenticar(req, res);    
});


export default router;
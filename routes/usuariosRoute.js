import express from 'express'
import UsuarioController from '../controllers/usuarioController.js'
import Autenticacao from '../middleware/autenticacao.js';

let router = express.Router();

let ctrl = new UsuarioController();
let auth = new Autenticacao();

router.get('/', auth.validar, (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Lista os usuários cadastrados'
    /* #swagger.security = [{
        apiKeyAuth: []
    }]
    */
    ctrl.listar(req, res);
});

router.get('/:id', auth.validar, (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Obtém um usuário pelo ID'
    /* #swagger.security = [{
        apiKeyAuth: []
    }]
    */
    ctrl.obter(req, res);
});

router.post('/', auth.validar, (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Cria um novo usuário'
    /* #swagger.security = [{
        apiKeyAuth: []
    }]
    #swagger.requestBody = {
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/usuarioModel" }
            }
        }

    }
    */
    ctrl.criar(req, res);
});

router.delete('/excluir/:id', auth.validar, (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Exclui um usuário pelo ID'
    /* #swagger.security = [{
        apiKeyAuth: []
    }]
    */
    ctrl.excluir(req, res); 
});

router.put('/', auth.validar, (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Atualiza um ou mais atributos dos usuários'
    /* #swagger.security = [{
        apiKeyAuth: []
    }]
    #swagger.requestBody = {
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/usuarioModel" }
            }
        }

    }
    */
    ctrl.atualizar(req, res);   
});

router.patch('/alterar-email/:id', auth.validar, (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Altera o e-mail de um usuário'
    // #swagger.parameters['id'] = { description: 'ID do usuário que terá o email atualizado' }
    /* #swagger.security = [{
        apiKeyAuth: []
    }]
    */
    ctrl.alterarEmail(req, res);
});


export default router;
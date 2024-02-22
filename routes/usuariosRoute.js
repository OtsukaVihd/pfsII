import express from 'express'
import UsuarioController from '../controllers/usuarioController.js'

let router = express.Router();

let ctrl = new UsuarioController();
router.get('/', (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Lista os usuários cadastrados'
    ctrl.listar
});
router.get('/:id',  (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Obtém um usuário pelo ID'
    ctrl.obter
});
router.post('/',  (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Cria um novo usuário'
    ctrl.criar
});
router.delete('/excluir/:id',  (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Exclui um usuário pelo ID'
    ctrl.excluir
});
router.put('/',  (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Atualiza um ou mais atributos dos usuários'
    ctrl.atualizar
});
router.patch('/alterar-email/:id',  (req, res) => {
    // #swagger.tags = ['Usuários']
    // #swagger.summary = 'Altera o e-mail de um usuário'
    // #swagger.parameters['id'] = { description: 'ID do usuário que terá o email atualizado' }
    ctrl.alterarEmail
});


export default router;
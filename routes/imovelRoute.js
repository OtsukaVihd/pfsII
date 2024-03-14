import express from "express";

import ImovelController from "../controllers/imovelController.js";

import Autenticacao from "../middleware/autenticacao.js";

const router = express.Router();

let ctrl = new ImovelController();

let auth = new Autenticacao();

router.get('/', auth.validar, (req, res) => {
    // #swagger.summary = 'Lista os imóveis cadastrados'
    ctrl.listar(req, res);
});

router.get('/:id', auth.validar, (req, res) => {
    // #swagger.summary = 'Obtém um imóvel pelo ID'
    ctrl.obter(req, res);
});

router.delete('/excluir/:id', auth.validar, (req, res) => {
    // #swagger.summary = 'Exclui um imóvel pelo ID'
    ctrl.excluir(req, res); 
});

router.post('/', auth.validar, (req, res) => {
    // #swagger.summary = 'Cria um novo imóvel'
    /* 
    #swagger.requestBody = {
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/imovelModel" }
            }
        }
    }
    */
    ctrl.cadastrar(req, res);
});

router.put('/', auth.validar, (req, res) => {
    // #swagger.summary = 'Atualiza um imóvel'
    /* #swagger.requestBody = {
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/imovelModel" }
            }
        }
    }
    */
    ctrl.alterar(req, res);
});

export default router;
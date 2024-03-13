import express from "express";

import ImovelController from "../controllers/imovelController.js";

import Autenticacao from "../middleware/autenticacao.js";

const router = express.Router();

let ctrl = new ImovelController();

let auth = new Autenticacao();

router.get("/", auth.validar ,(req, res) =>{
    //swagger.tags = ['Imóvel']
    //swagger.summary = 'Retorna todos os imóveis cadastrados'
    /* #swagger.security = [{
        apiKeyAuth: ['PFSII']
    }]
    */
    ctrl.listar(req, res);
})

export default router;
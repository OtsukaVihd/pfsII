import express from "express";

import LocacaoController from "../controllers/locacaoController.js";

import Autenticacao from "../middleware/autenticacao.js";

const router = express.Router();

let ctrl = new LocacaoController();

let auth = new Autenticacao();

router.post('/alugar', auth.validar, (req, res) => {
    /*#swagger.requestBody = {
        required: true,
        content: {
            'application/json': {
                schema: { $ref: "#/components/schemas/locacaoModel" }
            }
        }

    }
    */
    ctrl.locar(req, res)
});

export default router;
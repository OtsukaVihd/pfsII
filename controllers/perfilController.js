

export default class PerfilController {

    listar(req, res) {
        try {
            res.status(200).json([
                {id: 1,
                nome: "Vitor",
                email: 'votsuka@unoeste.br',
                funcao: "admin",}
            ]);
        }	
        catch(ex) {
            res.status(500).json(
            {msg: "Erro inesperado! Entre em contato com o nosso suporte!",
            detalhes: ex.message});
        }
    }




}


let usuarios = [
    {
        id: 1,
        nome: "Vitor",
        email: "votsuka@unoeste.br",
        cidade: "Presidente Prudente",
        sexo: "M",
        idade: 22
    },
    {
        id: 2,
        nome: "Fulano",
        email: "fulano@unoeste.br",
        cidade: "Presidente Prudente",
        sexo: "M",
        idade: 44
    }
]


export default class UsuarioController {

    listar(req, res) {
        res.status(200).json(usuarios);
    }

    obter(req, res) {
        
        let usuario = usuarios.filter(x => x.id == req.params.id);
        if(usuario.length > 0) {
            res.status(200).json(usuario);
        }
        else{
            res.status(404).json({msg: "Usuário não encontrado"});
        }

    }

    excluir(req, res){

        usuarios = usuarios.filter(x => x.id != req.params.id)

        res.status(200).json({msg: "Exclusão realizada com sucesso"})
    }

    criar(req, res) {
        if(req.body) {
            if(Object.keys(req.body).length == 6){
                usuarios.push(req.body);
                res.status(200).json({msg: "Usuário cadastrado com sucesso!"});          
            }
            else {
                res.status(418).json({msg: "Por favor, preencha todas as informações do usuário"})
            }
        }
        else {
            res.status(400).json({msg: "Por favor, informe os dados do usuário"})
        }
    }
}
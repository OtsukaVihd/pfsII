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

        let usuario = usuarios.filter(x => x.id == req.params.id);
        if(usuario.length > 0){
            usuarios = usuarios.filter(x => x.id != req.params.id)
            res.status(200).json({msg: "Exclusão realizada com sucesso"});
        }
        else{
            res.status(404).json({msg: "Usuário não encontrado!"});
        }
    }

    atualizar(req, res){
        if(req.body){
            if(Object.keys(req.body).length == 6){
                usuarios = usuarios.map(function(value, index){
                    
                    if(req.body.id == value.id){
                        return req.body;
                    }
                    return value;
                })

                res.status(200).json({msg: "Usuário atualizado com sucesso!"});
            }
            else{
                res.status(400).json({msg: "Existem campos que não foram preenchidos!"});
            }
        }
        else{
            res.status(400).json({msg: "Preencha corretamente os dados!"});
        }
    }

    
    alterarEmail(req, res){
        try{

            let achou = false
            if(req.body){
                if(req.body.email != ""){
                    for(let i = 0; i < usuarios.length; i++){
    
                        if(usuarios[i].id == req.params.id){
                            usuarios[i].email = req.body.email;
                            achou = true
                        }
                    }
    
                    if(achou){
                        res.status(200).json({msg: "Email alterado!"});
                    }
                    else{
                        res.status(404).json({msg: "Usuário não encontrado para alteração de email!"});
                    }
                }
            }
            else{
                res.status(400).json({msg: "Preencha o email a ser alterado!"})
            }
            
        }
        catch{
            res.status(500).json({msg: "Erro inesperado! Entre em contato com o nosso suporte!"});
        }

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
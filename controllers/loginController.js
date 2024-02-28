var usuarios = [
    {
        id: 1,
        nome: "Vitor",
        email: "votsuka@unoeste.br",
        cidade: "Presidente Prudente",
        sexo: "M",
        idade: 22,
        senha: '123'
    },
    {
        id: 2,
        nome: "Fulano",
        email: "fulano@unoeste.br",
        cidade: "Presidente Prudente",
        sexo: "M",
        idade: 44,
        senha: '321'
    }
]

export default class PerfilController {

    tokenAuth() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 15; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
/*
    autenticar(req, res) {
        try{
            let achou = false
            if(req.body){
                if(req.body.email != "" && req.body.nome != ""){
                    for(let i = 0; i < usuarios.length; i++){
                        if(usuarios[i].nome == req.body.nome && usuarios[i].email == req.body.email){
                            achou = true
                        }
                    }
    
                    if(achou){
                        res.status(200).json({msg: "Token de autenticação: " + this.tokenAuth()});
                    }
                    else{
                        res.status(404).json({msg: "Usuário ou email não encontrado!"});
                    }
                }
            }
            else{
                res.status(400).json({msg: "Preencha o email ou o nome!"})
            }  
        }

        catch(ex){
            res.status(500).json({msg: "Erro inesperado! Entre em contato com o nosso suporte!",
            detalhes: ex.message});
        }
    }
*/

    autenticar(req, res) {
        try{
            if(req.body){
                let usuario = usuarios.filter(x => x.senha == req.body.senha && x.email == req.body.email);
                if(usuario.length > 0){
                    res.status(200).json({msg: "Token de autenticação: PFSII"});
                }
                else{
                    res.status(404).json({msg: "Usuário e/ou email não encontrado!"});
                }
            }
        }
        catch(ex){
            res.status(500).json({msg: "Erro inesperado! Entre em contato com o nosso suporte!",
            detalhes: ex.message});
        }
    }

}
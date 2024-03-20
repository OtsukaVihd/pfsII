import Autenticacao from "../middleware/autenticacao.js";
import LoginModel from "../models/loginModel.js";
import UsuarioModel from "../models/usuarioModel.js";


export default class PerfilController {

    async autenticar(req, res) {
        try{
            if(req.body){
                let { email, senha } = req.body;
                let login = new LoginModel(email, senha);
                if(await login.autenticar()){
                    let usuario = new UsuarioModel();
                    usuario = await usuario.obterPorEmailSenha(email, senha);
                    usuario.usuSenha = '';

                    let auth = new Autenticacao();
                    let token = auth.gerarToken(usuario);

                    res.cookie('jwt', token, {httpOnly: true})

                    res.status(200).json({tokenAcesso: token});
                }
                else{
                    res.status(404).json({msg: "Usuário e/ou email inválido!"});
                }
            }
        }
        catch(ex){
            res.status(500).json({msg: "Erro inesperado! Entre em contato com o nosso suporte!",
            detalhes: ex.message});
        }
    }

}
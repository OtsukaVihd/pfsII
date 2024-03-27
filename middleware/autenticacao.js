import jwt from 'jsonwebtoken';
import UsuarioModel from '../models/usuarioModel.js';

const JWT_SEGREDO = 'M3H4CK34R4M'

export default class Autenticacao {
    async validar(req, res, next){
        if(req.cookies.jwt){
            let token = req.cookies.jwt;
            try{
                let usuario = jwt.verify(token, JWT_SEGREDO);
                let usuarioModel = new UsuarioModel();
                usuarioModel = await usuarioModel.obter(usuario.usuId);
                
                if(usuarioModel != null){
                    req.usuarioLogado = usuarioModel;
                    next()
                }
                else{
                    res.status(401).json({msg: "Usuario invalido!"});
                }
            }
            catch(ex){
                if(ex.name == "TokenExpiredError"){
                    let usuarioRecuperado = jwt.verify(token, JWT_SEGREDO, {ignoreExpiration: true})

                    let auth = new Autenticacao();
                    let novoToken = auth.gerarToken({
                        usuId: usuarioRecuperado.usuId,
                        usuEmail: usuarioRecuperado.usuEmail,
                        usuNome: usuarioRecuperado.usuNome,
                        perfil: usuarioRecuperado.perfil
                    })
                    res.cookie(jwt, novoToken, {
                        httpOnly: true
                    });
                    req.usuarioLogado = usuarioRecuperado;
                    next()
                }
                else{
                    res.status(401).json({msg: "Não autorizado!"});
                }
            }
        }
        else{
            res.status(401).json({msg: "Não autorizado!"});
        }
    }

    gerarToken(usuario){
        return jwt.sign(usuario, JWT_SEGREDO, {expiresIn: 60})
    }
}
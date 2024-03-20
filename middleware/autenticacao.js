import jwt from 'jsonwebtoken';
import UsuarioModel from '../models/usuarioModel.js';

const JWT_SEGREDO = 'M3H4CK34R4M'

export default class Autenticacao {
    async validar(req, res, next){
        if(req.cookies.jwt){
            try{
                let jwt = req.cookies.jwt;
                let usuario = jwt.verify(jwt, JWT_SEGREDO);
                let usuarioModel = new UsuarioModel();
                usuarioModel = await usuarioModel.obter(usuario.usuId);
                
                if(usuarioModel != null){
                    next()
                }
                else{
                    res.status(401).json({msg: "Usuario invalido!"});
                }

            }
            catch{
                res.status(401).json({msg: "Não autorizado!"});
            }
        }
        else{
            res.status(401).json({msg: "Não autorizado!"});
        }
    }

    gerarToken(usuario){
        return jwt.sign(JSON.stringify(usuario.toJSON()), JWT_SEGREDO)
    }
}
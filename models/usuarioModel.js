import Database from '../database/database.js';

let banco = new Database();

export default class UsuarioModel{

    #usuId;
    #usuNome;
    #usuEmail;
    #usuSenha;
    #perfil;

    get (usuId){
        return this.#usuId;
    }
    set usuId (usuId){
        this.#usuId = usuId;
    }

    get (usuNome){
        return this.#usuNome;
    }
    set usuNome (usuNome){
        this.#usuNome = usuNome;
    }

    get (usuEmail){
        return this.#usuEmail;
    }
    set usuEmail (usuEmail){
        this.#usuEmail = usuEmail;
    }

    get (usuSenha){
        return this.#usuSenha;
    }
    set usuSenha (usuSenha){
        this.#usuSenha = usuSenha;
    }

    get (perfil){
        return this.#perfil;
    }
    set perfil (perfil){
        this.#perfil = perfil;
    }

    constructor(usuId, usuNome, usuEmail, usuSenha, perfil){
        this.#usuId = usuId;
        this.#usuNome = usuNome;
        this.#usuEmail = usuEmail;
        this.#usuSenha = usuSenha;
        this.#perfil = perfil;
    }

    toJSON(){
        return {
            'usuId': this.#usuId,
            'usuNome': this.#usuNome,
            'usuEmail': this.#usuEmail,
            'usuSenha': this.#usuSenha
        }
    }


    async listar(){
        let lista = [];
        let sql = "select * from tb_usuario";

        let rows = await banco.ExecutaComando(sql);

        for(let i = 0; rows.length; i++){
            let row = rows[i];

            lista.push(new UsuarioModel(row['usu_id'], row['usu_nome'], row['usu_email'], row['usu_senha'], row['per_id']));
        }

        return lista;
    }

}


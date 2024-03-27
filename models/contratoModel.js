import Database from '../db/database.js';

let banco = new Database();

export default class ContratoModel {

    #contratoId
    #imovel
    #usuario

    get contratoId(){
        return this.#contratoId;
    }
    set contratoId(contratoId){
        this.#contratoId = contratoId;
    }

    get imovel(){
        return this.#imovel;
    }
    set imovel(imovel){
        this.#imovel = imovel;
    }

    get usuario(){
        return this.#usuario;
    }
    set usuario(usuario){
        this.#usuario = usuario;
    }

    constructor(contratoId, imovel, usuario){
        this.#contratoId = contratoId;
        this.#imovel = imovel;
        this.#usuario = usuario;
    }

    async gravar(bd){
    
        if(bd != null)
            banco = bd;
        

        let sql = `insert into tb_contrato (imv_id, usu_id) values (?, ?)`;

        let valores = [this.#imovel.imovelId, this.#usuario.usuId]

        let idGerado = await banco.ExecutaComandoLastInserted(sql, valores);

        return idGerado;
    
    }

    // async listar(){
    //     let sql = "select * from tb_contrato"

    //     let lista = await banco.ExecutaComando(sql);

    //     return lista;
    // }
}
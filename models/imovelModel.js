import Database from "../db/database.js";

const banco = new Database();

export default class ImovelModel{

    #imovelId;
    #imovelDescricao;
    #imovelValor;
    #imovelCep;
    #imovelEndereco;
    #imovelBairro;
    #imovelCidade;
    #imovelUf;
    #imovelDisponivel;

    constructor(imovelId, imovelDescricao, imovelValor, imovelCep, imovelEndereco, imovelBairro, imovelCidade, imovelUf, imovelDisponivel){
        this.#imovelId = imovelId;
        this.#imovelDescricao = imovelDescricao;
        this.#imovelValor = imovelValor;
        this.#imovelCep = imovelCep;
        this.#imovelEndereco = imovelEndereco;
        this.#imovelBairro = imovelBairro;
        this.#imovelCidade = imovelCidade;
        this.#imovelUf = imovelUf;
        this.#imovelDisponivel = imovelDisponivel;
    }

    get imovelId(){
        return this.#imovelId;
    }
    set imovelId(imovelId){
        this.#imovelId = imovelId;
    }

    get imovelDescricao(){
        return this.#imovelDescricao;
    }
    set imovelDescricao(imovelDescricao){
        this.#imovelDescricao = imovelDescricao;
    }

    get imovelValor(){
        return this.#imovelValor;
    }
    set imovelValor(imovelValor){
        this.#imovelValor = imovelValor;
    }

    get imovelCep(){
        return this.#imovelCep;
    }
    set imovelCep(imovelCep){
        this.#imovelCep = imovelCep;
    }

    get imovelEndereco(){
        return this.#imovelEndereco;
    }
    set imovelEndereco(imovelEndereco){
        this.#imovelEndereco = imovelEndereco;
    }

    get imovelBairro(){
        return this.#imovelBairro;
    }
    set imovelBairro(imovelBairro){
        this.#imovelBairro = imovelBairro;
    }

    get imovelCidade(){
        return this.#imovelCidade;
    }
    set imovelCidade(imovelCidade){
        this.#imovelCidade = imovelCidade;
    }

    get imovelUf(){
        return this.#imovelUf;
    }
    set imovelUf(imovelUf){
        this.#imovelUf = imovelUf;
    }

    get imovelDisponivel(){
        return this.#imovelDisponivel;
    }
    set imovelDisponivel(imovelDisponivel){
        this.#imovelDisponivel = imovelDisponivel;
    }

    toJSON(){
        return {
            'imovelId': this.imovelId,
            'imovelDescricao': this.imovelDescricao,
            'imovelValor': this.imovelValor,
            'imovelCep': this.imovelCep,
            'imovelEndereco': this.imovelEndereco,
            'imovelBairro': this.imovelBairro,
            'imovelCidade': this.imovelCidade,
            'imovelUf': this.imovelUf,
            'imovelDisponivel': this.imovelDisponivel
        }
    }


    async listar(){
        let sql = 'select * from tb_imovel';

        let rows = await banco.ExecutaComando(sql);
        
        let lista = [];

        for(let i = 0; i < rows.length; i++){
            lista.push(new ImovelModel(rows[i]['imv_id'], rows[i]['imv_desc'], rows[i]['imv_valor'], rows[i]['imv_cep'], rows[i]['imv_endereco'], rows[i]['imv_bairro'], rows[i]['imv_cidade'], rows[i]['imv_uf'], rows[i]['imv_disponivel']));
        }

        return lista;

    }
}

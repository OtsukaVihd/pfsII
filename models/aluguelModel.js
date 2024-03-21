import Database from '../db/database.js';

const banco = new Database();

export default class AluguelModel {

    #aluguelId;
    #aluguelMes;
    #aluguelVencimento;
    #aluguelValor;
    #aluguelPago;
    #contrato;

    get aluguelId(){
        return this.#aluguelId;
    }
    set aluguelId(aluguelId){
        this.#aluguelId = aluguelId;
    }

    get aluguelMes(){
        return this.#aluguelMes;
    }
    set aluguelMes(aluguelMes){
        this.#aluguelMes = aluguelMes;
    }

    get aluguelVencimento(){
        return this.#aluguelVencimento;
    }
    set aluguelVencimento(aluguelVencimento){
        this.#aluguelVencimento = aluguelVencimento;
    }

    get aluguelValor(){
        return this.#aluguelValor;
    }
    set aluguelValor(aluguelValor){
        this.#aluguelValor = aluguelValor;
    }

    get aluguelPago(){
        return this.#aluguelPago;
    }
    set aluguelPago(aluguelPago){
        this.#aluguelPago = aluguelPago;
    }

    get contrato(){
        return this.#contrato;
    }
    set contrato(contrato){
        this.#contrato = contrato;
    }

    constructor(aluguelId, aluguelMes, aluguelVencimento, aluguelValor, aluguelPago, contrato){
        this.#aluguelId = aluguelId;
        this.#aluguelMes = aluguelMes;
        this.#aluguelVencimento = aluguelVencimento;
        this.#aluguelValor = aluguelValor;
        this.#aluguelPago = aluguelPago;
        this.#contrato = contrato;
    }

    async gravar(){
        let sql = `insert into tb_aluguel (alu_mes, alu_vencimento, alu_valor, alu_pago, ctr_id) values (?, ?, ?, ?, ?)`;

        let valores = [this.#aluguelMes, this.#aluguelVencimento, this.#aluguelValor, this.#aluguelPago, this.#contrato.contratoId]
        
        let idGerado = await banco.ExecutaComandoNonQuery(sql, valores);

        return idGerado;
    }
}
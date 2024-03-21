import AluguelModel from '../models/aluguelModel.js';
import ContratoModel from '../models/contratoModel.js';
import ImovelModel from '../models/imovelModel.js';
import UsuarioModel from '../models/usuarioModel.js';

export default class LocacaoController {

    async locar(req, res){
        
        if(req.body){
            let { imovelId } = req.body;
CORRIGIR AQUI
            if(imovelId){
                let imovel = new ImovelModel();
                imovel = await imovel.obter(imovelId);

                if(imovel.imovelDisponivel == "S"){
                    let usuarioId = req.usuarioLogado.usuId;
                    let contrato = new ContratoModel(0, new ImovelModel(imovelId), new UsuarioModel(usuarioId));
                    contrato.contratoId = await contrato.gravar();
    
                    //gerar um ano de aluguel p/contrato
                    for(let i = 0; i < 12; i++){
                        let aluguel = new AluguelModel();
                        aluguel.aluguelValor = imovel.imovelValor;
                        aluguel.aluguelPago = "N";
                        aluguel.contrato = contrato;
                        
                        let dataVencimento = new Date();
                        dataVencimento.setMonth(dataVencimento.getMonth() + i);
                        
                        let mes = dataVencimento.getMonth() + 1;
                        aluguel.aluguelMes = mes;
                        aluguel.aluguelVencimento = dataVencimento;
                        await aluguel.gravar();
                    }

                    res.status()
                }
                else{
                    res.status(400).json({msg: "Imóvel indisponível para locação!"})
                }
            }
            else{
                res.status(400).json({msg: "O corpo da requisição não possui o id do imóvel!"})
            }
        }
        else{
            res.status(400).json({msg: "Requisição inválida!"})
        }
    }
}
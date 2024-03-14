import ImovelModel from '../models/imovelModel.js';

export default class ImovelController{

    async listar(req, res){
        try{
            let imovel = new ImovelModel();
            let lista = await imovel.listar();
            res.status(200).json(lista);
        }
        catch(ex){
            res.status(500).json({msg: 'Erro inesperado'});
        }
    }

    async obter(req, res){
        try{
            let {id} = req.params;
            let imovel = new ImovelModel();
            let imovelEncontrado = await imovel.obter(id);
            if(imovelEncontrado != null){
                res.status(200).json(imovelEncontrado);
            }
            else{
                res.status(404).json({msg: `Imóvel com id ${id} não encontrado`});
            }
        }
        catch(ex){
            res.status(500).json({msg: 'Erro interno do servidor'});
        }
    }

    async excluir(req, res){
        try{
            let {id} = req.params;
            let imovel = new ImovelModel();
            let result = await imovel.excluir(id);
            if(result){
                res.status(200).json({msg: `Imóvel com id ${id} excluído com sucesso`});
            }
            else{
                res.status(500).json({msg: `Erro durante a exclusão do imóvel`});
            }
        }
        catch(ex){
            res.status(500).json({msg: 'Erro interno do servidor'});
        }
    }

    async cadastrar(req, res){
        try{
            let { imovelDescricao, imovelValor, imovelCep, imovelEndereco, imovelBairro, imovelCidade, imovelUf, imovelDisponivel } = req.body;
            if(imovelDescricao != '' && imovelValor != '' && imovelCep != '' && imovelEndereco != '' && imovelBairro != '' && imovelCidade != '' && imovelUf != '' && imovelDisponivel != ''){
                if(parseFloat(imovelValor) > 0){
                    let imovel = new ImovelModel(0, imovelDescricao, imovelValor, imovelCep, imovelEndereco, imovelBairro, imovelCidade, imovelUf, imovelDisponivel);
                    let result = await imovel.gravar();

                    if(result){
                        res.status(201).json({msg: 'Imóvel cadastrado com sucesso'});
                    }
                    else{
                        res.status(500).json({msg: 'Erro durante o cadastro do imóvel'});
                    }

                }
                else{
                    res.status(400).json({msg: 'Valor do imóvel deve ser maior que zero'});
                }
            }
            else{
                res.status(400).json({msg: 'Preencha corretamente os valores necessários!'});
            }
        }
        catch(ex){
            res.status(500).json({msg: 'Erro interno do servidor'});
        }
    }

    async alterar(req, res){
        try{
            let { imovelId, imovelDescricao, imovelValor, imovelCep, imovelEndereco, imovelBairro, imovelCidade, imovelUf, imovelDisponivel } = req.body;
            if(imovelId > 0 && imovelDescricao != '' && imovelValor != '' && imovelCep != '' && imovelEndereco != '' && imovelBairro != '' && imovelCidade != '' && imovelUf != '' && imovelDisponivel != ''){
                if(parseFloat(imovelValor) > 0){
                    let imovel = new ImovelModel(imovelId, imovelDescricao, imovelValor, imovelCep, imovelEndereco, imovelBairro, imovelCidade, imovelUf, imovelDisponivel);
                    let result = await imovel.gravar();

                    if(result){
                        res.status(201).json({msg: 'Imóvel alterado com sucesso'});
                    }
                    else{
                        res.status(500).json({msg: 'Erro durante a alteração do imóvel'});
                    }

                }
                else{
                    res.status(400).json({msg: 'Valor do imóvel deve ser maior que zero'});
                }
            }
            else{
                res.status(400).json({msg: 'Preencha corretamente os valores necessários!'});
            }
        }
        catch(ex){
            res.status(500).json({msg: 'Erro interno do servidor'});
        } 
    }   

}
let pistaModel = require('../models/pistaModel');

function buscarPistas(req,res){
    pistaModel.buscarPistas()
                 .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao fazer o SELECT dos dados do banco! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
}

function cadastrar(req,res){
    let link = req.body.linkServer;
    let pista = req.body.pistaServer;
    let descricao = req.body.descricaoServer;
    let inclinacao = req.body.inclinacaoServer;
    let tempo = req.body.tempoServer;
    let sentido = req.body.sentidoServer;

    if(link == undefined){
        res.status(200).send("O link está undefined");
    }
    else if(pista == undefined){
        res.status(200).send("A pista está undefined");
    }
    else if(descricao == undefined){
        res.status(200).send("A descrição está undefined");
    }
    else if(inclinacao == undefined){
        res.status(200).send("A inclinação está undefined");
    }
    else if(tempo == undefined){
        res.status(200).send("O tempo está undefined");
    }
    else if(sentido == undefined){
        res.status(200).send("O Sentido está undefined");
    }else{
         pistaModel.cadastrar(link,pista,descricao,inclinacao,tempo,sentido)
                 .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao cadastrar a pista! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
    }

}

function buscar(req,res){
    let id = req.params.id;

    if(id == undefined){
        res.status(400).send("O Id está undefined");
    }else{

        pistaModel.buscar(id)
            .then(
                function(resultado){
                    res.json(resultado);
                }
            ).catch(
                function (erro){
                    console.log(erro);
                    console.log(
                            "\nHouve um erro ao fazer o SELECT dos dados do banco! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                }
            )
    }

}

module.exports = {
    buscarPistas,
    buscar,
    cadastrar
}
let pneuModel = require("../models/pneuModel");

function buscar(req,res){
    let idCarro = req.params.idCarro;

    if(idCarro == undefined){
        res.status(200).send("O id está undefined");
    }else{
        pneuModel.buscar(id)
            .then(
                function (resultado){
                    res.json(resultado);
                }
            ).catch(
                function (erro){
                    console.log(erro);
                   console.log(
                        "\nHouve um erro ao buscar o pneu! Erro: ",
                         erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

function cadastrar(req,res){
    let condicao = req.body.desgasteServer;
    let tipo = req.body.tipoServer;
    let fkCarro = req.body.idCarro;

    if(condicao == undefined){
        res.status(200).send("A condicao está undefined");
    }else if(tipo == undefined){
        res.status(200).send("O tipo está undefined");
    }else if(fkCarro == undefined){
        res.status(200).send("O fkCarro está undefined");
    }else{
        pneuModel.cadastrar(condicao,tipo,fkCarro)
            then(
                function (resultado){
                    res.json(resultado);
                }
            ).catch(
                function (erro){
                    console.log(erro);
                   console.log(
                        "\nHouve um erro ao cadastrar o pneu! Erro: ",
                         erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }

}

function atualizar(req,res){
    let condicao = req.body.desgasteServer;
    let tipo = req.body.tipoServer;
    let idPneu = req.params.idPneu;

    if(condicao == undefined){
        res.status(200).send("A condicao está undefined");
    }else if(tipo == undefined){
        res.status(200).send("O tipo está undefined");
    }else if(idPneu == undefined){
        res.status(200).send("O idPneu está undefined");
    }else{

        pneuModel.atualizar(condicao,tipo,idPneu)
                    then(
                        function (resultado){
                            res.json(resultado);
                        }
                    ).catch(
                        function (erro){
                            console.log(erro);
                        console.log(
                                "\nHouve um erro ao atualizar o pneu! Erro: ",
                                erro.sqlMessage
                            );
                            res.status(500).json(erro.sqlMessage);
                        }
                    )
    }

}

module.exports = {
    buscar,
    cadastrar,
    atualizar
}
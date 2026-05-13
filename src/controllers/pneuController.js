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
                        "\nHouve um erro ao atualizar a descricao! Erro: ",
                         erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}


module.exports = {
    buscar,
}
let graficoModel = require("../models/graficoModel");

function buscarCorridas(req,res){
    let idUsuario = req.params.idUsuario;

    if(idUsuario == undefined){
        res.status(200).send("O id está undefined");
    }else{
        graficoModel.buscarCorridas(idUsuario)
            .then(
                function (resultado){
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
    buscarCorridas
}
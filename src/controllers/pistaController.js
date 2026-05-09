let pistaModel = require('../models/pistaModel');

function buscarPistas(req,res){
    pistaModel.buscarPista()
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

function buscar(){
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
    buscar
}
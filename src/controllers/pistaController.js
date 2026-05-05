let pistaModel = require('../models/pistaModel');

function buscarPista(req,res){
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
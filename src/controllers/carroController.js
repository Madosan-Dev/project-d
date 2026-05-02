let carroModel = require('../models/carroModel');

function buscarCarro(){

}

function cadastrarCarro(req,res){
    // Estas variaveis pegam valores do validacoes.js, da função cadastrarCarro
    let link = req.body.linkServer;
    let marca = req.body.marcaServer;
    let modelo = req.body.modeloServer;
    let potencia = req.body.potenciaServer;
    let peso = req.body.pesoServer;
    let tracao = req.body.tracaoServer;
    let fkUsuario = req.body.fkUsuarioServer;

    if(link == undefined){
        res.status(400).send("O link está undefined!");
    } else if(marca == undefined){
        res.status(400).send("A marca está undefined!");
    } else if(modelo == undefined){
        res.status(400).send("O modelo está undefined");
    } else if(potencia == undefined){
        res.status(400).send("A potencia está undefined");
    } else if(peso == undefined){
        res.status(400).send("O peso está undefined");
    } else if(tracao == undefined){
        res.status(400).send("A tração está undefined");
    } else if(fkUsuario == undefined){
        res.status(400).send("O fkUsuario está undefined");
    }

        carroModel.cadastrarCarro(link,modelo,marca,tracao,peso,potencia,fkUsuario)
             .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do carro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    cadastrarCarro
}
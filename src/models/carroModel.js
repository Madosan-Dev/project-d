let database = require("../database/config");

function buscarCarro(){
    
}

function cadastrarCarro(urlFoto,modelo,marca,tracao,peso,cavalos,fkUsuario){
    console.log("ACESSEI O CARRO MODEL");

    let instrucaoSql = `
        INSERT INTO carro (url_foto,modelo,marca,tracao,peso,cavalos,fk_usuario) 
        VALUES ('${urlFoto}','${modelo}','${marca}','${tracao}','${peso}','${cavalos}','${fkUsuario}');
    `;

    console.log(`EXECUTANDO A INTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarCarro,
    cadastrarCarro
}
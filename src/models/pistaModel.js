let database = require('../database/config');

function buscarPistas(){
    console.log("ACESSEI O PISTA MODEL");

    let instrucaoSql = `
        SELECT * FROM pista;
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

function buscar(id){
    console.log("ACESSEI O PISTA MODEL");

    let instrucaoSql = `
        SELECT * FROM pista WHERE id = '${id}'
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPistas,
    buscar
}
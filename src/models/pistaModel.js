let database = require('../database/config');

function buscarPista(){
    console.log("ACESSEI O PISTA MODEL");

    let instrucaoSql = `
        SELECT * FROM pista;
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}
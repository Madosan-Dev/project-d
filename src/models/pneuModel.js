let database = require("../database/config");

function buscar(id){
    console.log("ACESSEI O PNEU MODEL");

    let instrucaoSql = `
        SELECT * FROM pneu WHERE id = '${id}'
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar,
}
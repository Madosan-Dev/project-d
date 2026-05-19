let database = require("../database/config");

function buscarCorridas(idUsuario){
    console.log("ACESSEI O GRAFICO MODEL");

    let instrucaoSql = `
        SELECT * FROM historico_corrida
        WHERE corredor_id = ${idUsuario};
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
    
}

module.exports = { 
    buscarCorridas
}
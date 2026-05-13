let database = require("../database/config");

function buscar(id){
    console.log("ACESSEI O PNEU MODEL");

    let instrucaoSql = `
        SELECT * FROM pneu WHERE fkCarro = '${id}';
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

function cadastrar(condicao,tipo,fkCarro){
    console.log("ACESSEI O PNEU MODEL");

    let instrucaoSql = `
        INSERT INTO pneu (condicao_pneu,tipo,posicao,fk_carro)
        VALUES
        (${condicao},'${tipo}','Dianteira Direita',${fkCarro}),
        (${condicao},'${tipo}','Dianteira Esquerda',${fkCarro}),
        (${condicao},'${tipo}','Traseira Direita',${fkCarro}),
        (${condicao},'${tipo}','Traseira Esquerda',${fkCarro});
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

function atualizar(condicao,tipo,idPneu){
    console.log("ACESSEI O PNEU MODEL");

    let instrucaoSql = `
        UPDATE pneu 
        SET 
            condicao_pneu = ${condicao},
            tipo = '${tipo}'
        WHERE
            id = ${idPneu};
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar,
    cadastrar,
    atualizar
}
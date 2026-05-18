let database = require('../database/config');

function buscarPistas(){
    console.log("ACESSEI O PISTA MODEL");

    let instrucaoSql = `
        SELECT * FROM pista;
    `;

    console.log(`EXECUTANDO INSTRUÇÃO SQL: \n ${instrucaoSql}`);
    return database.executar(instrucaoSql);
}

function cadastrar(link,pista,descricao,inclinacao,tempo,sentido){
    console.log("ACESSEI o PISTA MODEL");

    let instrucaoSql = `
        INSERT INTO pista 
        (url_foto,nome,descricao,inclinacao,tempo,sentido_inclinacao)
        VALUES
        ('${link}','${pista}','${descricao}',${inclinacao},'${tempo}','${sentido}');
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
    buscar,
    cadastrar
}
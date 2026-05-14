function cadastrarPneu(){
    let idCarro = sessionStorage.ID_CARRO;
    let tipo = slt_pneu.value 

    fetch("/pneus/cadastrar/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                condicao: 100,
                tipoServer: tipo,
                idCarro: idCarro
            }),
            })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {

                div_mensagem.innerHTML = `<p class="sucesso">Pneu cadastrado com sucesso!</p>`;

                setTimeout(() => {
                    window.location = "garagem.html";
                }, "4000");

                finalizarAguardar();
                } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });

}
function buscarCarro(){
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/carros/buscar/${idUsuario}`)
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    resposta.json().then(function (dados){

                        if(dados.length > 0){
                            let link = dados[0].url_foto;
    
                            div_foto.innerHTML = `<img src="${link}" class="foto_carro"  onerror="this.onerror=null; this.src='assets/icones/foto_invalida.png';">`;
                        }else{
                            div_foto.innerHTML = `<h1>Você ainda não tem carro cadastrado</h1>
                            <br>
                                <a href="../cadastro-carro.html">Cadastre aqui!</a> `;
                        }

                    });
                } else {
                throw "Houve um erro ao buscar os dados!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });

}

function carregarDados(){
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/carros/buscar/${idUsuario}`)
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    resposta.json().then(function (dados){

                        if(dados.length > 0){
                            let modelo = dados[0].modelo;
                            let marca = dados[0].marca;
                            let cavalos = dados[0].cavalos;
                            let tracao = dados[0].tracao;
                            let peso = dados[0].peso;
    
                            dados_carro.innerHTML = `
                            <h2>Dados do Carro</h2>
                            <div class="dados_carro">
                                <div class="info">
                                    <img src="../assets/icones/carro.png" alt="">
                                    <p>Modelo : ${modelo}</p>
                                </div>
                                <div class="info">
                                    <img src="../assets/icones/carro.png" alt="">
                                    <p>Marca : ${marca}</p>
                                </div>
                                <div class="info">
                                    <img src="../assets/icones/eixo.png" alt="">
                                    <p>Tração : ${tracao}</p>
                                </div>
                                <div class="info">
                                    <img src="../assets/icones/peso.png" alt="">
                                    <p>Peso : ${peso}</p>
                                </div>
                                <div class="info">
                                    <img src="../assets/icones/motor.png" alt="">
                                    <p>Potencia : ${cavalos} CV</p>
                                </div>
                            </div>
                            `;
                        }

                    });
                } else {
                throw "Houve um erro ao buscar os dados!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });
}
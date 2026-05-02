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
                            let tracaoFormatado = '';

                            if(tracao == 'AWD'){
                                tracaoFormatado = 'Integral';
                            }else if(tracao == 'FR'){
                                tracaoFormatado = 'Traseira';
                            }else if(tracao == 'FF'){
                                tracaoFormatado = 'Dianteira';
                            }
    
                            dados_carro.innerHTML = `
                            <h2>Dados do Carro</h2>
                            <div class="dados_carro">
                                <div class="info">
                                    <img src="../assets/icones/carro.png" alt="">
                                    <p>Modelo : <span>${modelo} </span></p>
                                </div>
                                <div class="info">
                                    <img src="../assets/icones/carro.png" alt="">
                                    <p>Marca : <span>${marca} </span></p>
                                </div>
                                <div class="info">
                                    <img src="../assets/icones/eixo.png" alt="">
                                    <p>Tração : <span>${tracao} (${tracaoFormatado})</span></p>
                                </div>
                                <div class="info">
                                    <img src="../assets/icones/peso.png" alt="">
                                    <p>Peso : <span>
                                    ${peso.toFixed(2).replaceAll('.',',')} KG</span></p>
                                </div>
                                <div class="info">
                                    <img src="../assets/icones/motor.png" alt="">
                                    <p>Potencia : <span>${cavalos} CV </span></p>
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

function buscarPneu(){

}

function buscarDescricao(){
    let idUsuario = sessionStorage.ID_USUARIO;
    let descricaoPerfil = document.getElementById('descricao_perfil');
    let status_desc = document.getElementById('status_desc');

    fetch(`/usuarios/buscarDescricao/${idUsuario}`)
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    resposta.json().then(function (dados){

                        if(dados.length > 0){
                            let descricao = dados[0].descricao;
                            if(descricao != null){
                                descricaoPerfil.value = descricao; 
                            }else{
                                status_desc.innerHTML = 'Adicionar';
                            }
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
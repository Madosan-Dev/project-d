
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
                            sessionStorage.ID_CARRO = dados[0].id;
                            let modelo = dados[0].modelo;
                            let marca = dados[0].marca;
                            let cavalos = dados[0].cavalos;
                            let tracao = dados[0].tracao;
                            let peso = dados[0].peso;
                            let tracaoFormatado = '';

                            sessionStorage.CV_CARRO = cavalos;
                            sessionStorage.PESO_CARRO = peso;

                            if(tracao == 'AWD'){
                                tracaoFormatado = 'Integral';
                            }else if(tracao == 'FR'){
                                tracaoFormatado = 'Traseira';
                            }else if(tracao == 'FF'){
                                tracaoFormatado = 'Dianteira';
                            }

                            dados_carro.style = `block`;
    
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
                            buscarPneu();
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

function buscarPistas(){
    fetch('/pistas/buscarPistas')
        .then(function (resposta){
            console.log("resposta: ", resposta);

            if(resposta.ok){
                resposta.json().then(function (dados){
                    if(dados.length > 0){


                       for(let i = 0; i < dados.length; i++){
                            let id = dados[i].id;
                            let urlFoto = dados[i].url_foto
                            let nome = dados[i].nome;
                            let desc = dados[i].descricao;

                            pistas_container.innerHTML  += `
                                <div id="box_pistas">
                                    <img src="${urlFoto}" alt="Foto da Pista">
                                    <div>
                                        <h2>${nome}</h2>
                                        <p>${desc}</p>
                                        <button onclick="redirecionaPista(${id})">Analisar</button>
                                    </div>


                                </div>
                            `;
                       }
                    }
                });
            }
        })
}

function redirecionaPista(id){
    sessionStorage.ID_PISTA = id;

    window.location = "corrida.html"
}

function buscarPistaCorrida(){
    let id = sessionStorage.ID_PISTA;

    fetch(`/pistas/buscar/${id}`)
        .then(function (resposta){
            console.log("resposta: ", resposta);

            if(resposta.ok){
                resposta.json().then(function (dados){
                   
                    if(dados.length > 0){
                        let nome = dados[0].nome;
                        let urlFoto = dados[0].url_foto;
                        let fotoPerfil = sessionStorage.LINK_USUARIO;
                        let inclinacao = dados[0].inclinacao;
                        let sentidoInclinacao = dados[0].sentido_inclinacao;

                        
                        let linkInclinacao = '';
                        sentidoInclinacao = sentidoInclinacao.toLowerCase();
                        
                        sessionStorage.INCLINACAO_PISTA = inclinacao;
                        sessionStorage.SENTIDO_PISTA = sentidoInclinacao;

                        if(sentidoInclinacao == 'subida'){
                            linkInclinacao = '../assets/icones/placa_subindo.png'
                        }else if (sentidoInclinacao == 'descida'){
                            linkInclinacao = '../assets/icones/placa_descendo.png'
                        }
                        

                       container_pista_corrida.innerHTML = `
                            <div>
                                <h1>${nome}</h1>
                            </div>
                            
                            <div class="info_pista_corrida">
                                <img src="${urlFoto}" alt="">
                                <canvas id="grafico_corrida"></canvas>
                            </div>

                            <div class="condicao_corrida">

                                <div class="box_corrida">
                                    <h2>Condições da pista</h2>
                                    <div>
                                        <img src="${linkInclinacao}" alt="">

                                        <div id="img_clima">
                                            <img src="../assets/imgs/chuva-pesada.png">
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Inclinação: ${inclinacao}%
                                        </h3>

                                        <select id="slt_clima" onchange="mudarClima()">
                                            <option selected>Chuva Forte</option>
                                            <option>Chuva</option>
                                            <option>Limpo</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="box_corrida pneu_box" id='dados_pneu'>
                                    <h2>Condições dos pneus</h2>
                                    
                                </div>

                            </div>
                            <div class="condicao_perfil">
                                <div class="box_corredores">
                                    
                                    <img src="${fotoPerfil}" alt="">
                                    

                                    <img src="../assets/icones/bandeira-de-corrida.png" id="img_bandeira">
                                    
                                    <div id="img_corredor">
                                    </div>

                                </div>
                                <div class="box_corredores slt">
                                    <div>
                                        <h3>Escolha um Adversario:</h3>

                                        <select id="slt_adversario" onchange="buscarFotoCorredor()">
                                        
                                        </select>
                                    </div>
                                    
                                    <button>Simular</button>
                                </div>
                            </div>

                                            
                       `;
                    }else{
                        document.getElementById('tela_escura').style.display = 'flex';
    
                        setTimeout(() => {
                            window.location = "pistas.html";
                        }, "2000");
                    }
                                                    
                        
                    

                });
            }
        })   
}

function buscarFotoCorredor(){
    let idCorredor = slt_adversario.value;

    fetch(`/usuarios/buscarFoto/${idCorredor}`)
        .then(function (resposta){
            console.log("resposta: ", resposta);

            if(resposta.ok){
                resposta.json().then(function (dados){

                    img_corredor.innerHTML = `<img src="${dados[0].url_foto}">`;
                })

            }
            
        }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });
}

function inserirSelect(){
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch("/usuarios/buscar/")
        .then(function (resposta){
            console.log("resposta: ", resposta);

            if(resposta.ok){
                resposta.json().then(function (dados){
                    if(dados.length > 0){
                        let id = 0;
                        let nome = '';
                        
                        for(let i = 0; i < dados.length - 1; i++){
                            id = dados[i].id;
                            nome = dados[i].nome;

                            if(i == 0 && id != idUsuario){
                                slt_adversario.innerHTML += `<option value="${id}" selected>${nome}</option>`;
                                buscarFotoCorredor();
                            }else if(id != idUsuario){
                                slt_adversario.innerHTML += `<option value="${id}">${nome}</option>`;
                            }
                        }

                    }else{
                        
                    }
                });

            }
            
        }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });
}



function mudarClima(){
    let clima = slt_clima.value;

    if(clima == 'Chuva'){
        img_clima.innerHTML = `<img src="../assets/imgs/chuva.png">`;
    }else if(clima == 'Chuva Forte'){
        img_clima.innerHTML = `<img src="../assets/imgs/chuva-pesada.png">`;
    }else if(clima == 'Limpo'){        
        img_clima.innerHTML = `<img src="../assets/imgs/clima.png">`;
    }
}

function buscarPneu(){
    let idCarro = sessionStorage.ID_CARRO;

    fetch(`/pneus/buscar/${idCarro}`)
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    resposta.json().then(function (dados){

                        if(dados.length > 0){
                            let posicao = [];
                            let tipo = '';
                            let condicaoPneu = [];

                            console.log(dados);
                            
                            for(let i = 0; i < dados.length; i++){
                                condicaoPneu.push(dados[i].condicao_pneu);
                                tipo = dados[i].tipo;
                                posicao.push(dados[i].posicao);
                            }

                            dados_pneu.style = 'block';

                            dados_pneu.innerHTML = `
                                <div>
                                    <h2>Tipo de Pneu: ${tipo}</h2>
                                </div>
                                   
                          
                                    <div id="dianteira">
                                        <span>Dianteiro <br> Esquerdo</span>
                                        <div id="dianteira_esquerda" class="pneu"><p>${parseInt(condicaoPneu[0])}%</p></div>
                                        <div class="eixo"></div>
                                        <div id="dianteira_direita" class="pneu"><p>${parseInt(condicaoPneu[1])}%</p></div>
                                        <span>Dianteiro. <br> Direito</span>
                                    </div>

                                    <div class="carda"></div>

                                    <div id="traseira">
                                        <span>Traseiro. <br> Esquerdo</span>
                                        <div id="traseira_esquerda" class="pneu"><p>${parseInt(condicaoPneu[2])}%</p></div>
                                        <div class="eixo"></div>
                                        <div id="traseira_direita" class="pneu"><p>${parseInt(condicaoPneu[3])}%</p></div>
                                        <span>Traseiro. <br> Direito</span>
                                    </div>
                                
                            `;

                            if(condicaoPneu[0] < 40){
                                dianteira_esquerda.classList.add("fraca");
                            }else if(condicaoPneu[0] < 70){
                                dianteira_esquerda.classList.add("media");
                            }else{
                                dianteira_esquerda.classList.add("forte");
                            }

                             if(condicaoPneu[1] < 40){
                                dianteira_direita.classList.add("fraca");
                            }else if(condicaoPneu[1] < 70){
                                dianteira_direita.classList.add("media");
                            }else{
                                dianteira_direita.classList.add("forte");
                            }

                             
                            if(condicaoPneu[2] < 40){
                                traseira_esquerda.classList.add("fraca");
                            }else if(condicaoPneu[2] < 70){
                                traseira_esquerda.classList.add("media");
                            }else{
                                traseira_esquerda.classList.add("forte");
                            }
                            
                            if(condicaoPneu[3] < 40){
                                traseira_direita.classList.add("fraca");
                            }else if(condicaoPneu[3] < 70){
                                traseira_direita.classList.add("media");
                            }else{
                                traseira_direita.classList.add("forte");
                            }

                        }else if(idCarro != undefined){
                            dados_pneu.style = 'block';
                            dados_pneu.innerHTML = `
                            <h2>Você ainda não tem Pneu Cadastrado</h2>
                            <br>
                                <a onclick="abrirMenuPneu()">Cadastre aqui!</a> `;
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

function buscarDashboardProbabilidade(){
    let idUsuario = sessionStorage.ID_USUARIO;
    let idCarro = 0;
    let sentidoIncli = sessionStorage.SENTIDO_PISTA;
    let peso = 0;
    let cv = 0;
    let pneus = [];

     fetch(`/carros/buscar/${idUsuario}`)
        .then(function (resposta){
            console.log("resposta: ", resposta);

            if(resposta.ok){
                resposta.json().then(function (dados){
                    if(dados.length > 0){
                        idCarro = dados[0].id;
                        cavalos = dados[0].cavalos;
                        peso = dados[0].peso;
                        sessionStorage.ID_CARRO = idCarro;
                        
                        fetch(`/pneus/buscar/${idCarro}`)
                        .then(function (resposta) {
                            console.log("resposta: ", resposta);
                            
                            if (resposta.ok) {
                                resposta.json().then(function (dados){
                                    
                                    if(dados.length > 0){
                                        for(let i = 0; i < dados.length; i++){
                                            pneus.push(dados[i].condicao_pneu);
                                        }
                                                
                                                    let infoGrafico = probabilidadeGrafico(sentidoIncli,pneus,cv,peso);
                            
                                                    corridaDashboard(infoGrafico);
                                                    buscarPneu();
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


                    }else{
                        
                    }
                });

            }
            
        }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });


    

}

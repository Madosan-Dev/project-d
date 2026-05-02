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
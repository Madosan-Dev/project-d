// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nomeUsuario = document.getElementById("nome_usuario");

    if (email != null && nome != null) {
        nomeUsuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function verificarLogado(){
    const btnLog = document.getElementById('btn_login');
    const btnCad = document.getElementById('btn_cad');

    let id = sessionStorage.ID_USUARIO;
    let email = sessionStorage.EMAIL_USUARIO;
    let nome = sessionStorage.NOME_USUARIO;

    if(email != null && id != null && nome != null){
        btnCad.display = 'none';
        btnLog.display = 'none';

        btns.innerHTML = `<a href="dashboard/dashboard.html">Dashboard</a>`;
        btns.innerHTML += `<a href="dashboard/perfil.html">Perfil</a>`;
        btns.innerHTML += `<a onclick="limparSessao()">Sair</a>`;
    }

}

function inserirFoto(){
    var link = sessionStorage.LINK_USUARIO;
    var foto = document.getElementById("div_foto");

    if(link != null){
        foto.innerHTML = `<img src="${link}" class="foto_perfil">`;
    }
}

function inserirFotoCarro(){
    var link = sessionStorage.LINK_CARRO;
    var foto = document.getElementById("div_foto");

    if(link != null){
        foto.innerHTML = `<img src="${link}" class="foto_perfil">`;
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {

    if (texto) {
        div_mensagem.innerHTML = `<p class="erro">${texto}</p>`;
    }
}


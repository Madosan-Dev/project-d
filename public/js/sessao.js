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

function inserirFoto(){
    var link = sessionStorage.LINK_USUARIO;
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


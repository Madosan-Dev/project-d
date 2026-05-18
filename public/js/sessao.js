// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email == null && nome == null) {
        window.location = "../login.html";
    } 
}

function validarSessaoPerfil() {
    let email = sessionStorage.EMAIL_USUARIO;
    let nome = sessionStorage.NOME_USUARIO;

    let nomeUsuario = document.getElementById("nome_usuario");

    if (email == null && nome == null) {
        window.location = "../login.html";
    }else{
        nomeUsuario.innerHTML = nome;
    }
}


function validarSessaoAdmin(pagina) {
    let tipo = sessionStorage.TIPO_USUARIO;

    if (tipo == 'admin') {

        if(pagina == 'dash'){
            btn_menu.innerHTML = `
                <a href="dashboard.html" class="active">Dashboard</a>
                <a href="pistas.html">Pistas</a>
                <a href="perfil.html">Perfil do Piloto</a>
                <a href="garagem.html">Garagem</a>
                <a onclick="abrirMenu()">Sair</a>`;
        }
        else if(pagina == 'pistas'){

            pistas_container.innerHTML += `<div id="box_pistas">
                                    
                                    <div>
                                        <p>Deseja cadastrar uma nova pista?
                                        <a href="../cadastrar_pista.html" ><button>Cadastrar</button></a>
                                        </p> 
                                    </div>
                            `;
                            

            btn_menu.innerHTML = `
                <a href="dashboard.html">Dashboard</a>
                <a href="pistas.html" class="active">Pistas</a>
                <a href="perfil.html">Perfil do Piloto</a>
                <a href="garagem.html">Garagem</a>
                <a onclick="abrirMenu()">Sair</a>`;
        }
        else if(pagina == 'perfil'){
            btn_menu.innerHTML = `
                    <a href="dashboard.html">Dashboard</a>
                    <a href="pistas.html">Pistas</a>
                    <a href="perfil.html" class="active">Perfil do Piloto</a>
                    <a href="garagem.html">Garagem</a>
                    <a onclick="abrirMenu()">Sair</a>`;
        }
        else if(pagina == 'corrida'){
            btn_menu.innerHTML = `
                <a href="dashboard.html">Dashboard</a>
                <a href="pistas.html" class="active">Pistas</a>
                <a href="perfil.html">Perfil do Piloto</a>
                <a href="garagem.html">Garagem</a>
                <a onclick="abrirMenu()">Sair</a>`;
        }
        else if(pagina == 'garagem'){
             btn_menu.innerHTML = `
                <a href="dashboard.html">Dashboard</a>
                <a href="pistas.html">Pistas</a>
                <a href="perfil.html">Perfil do Piloto</a>
                <a href="garagem.html" class="active">Garagem</a>
                <a onclick="abrirMenu()">Sair</a>`;
        }
    }else if(pagina == 'cadPista'){
        window.location = "/dashboard/perfil.html";
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

function verificarCarro(){
    let idCarro = sessionStorage.ID_CARRO

    if(idCarro == undefined){        
        abrirMenuCarro();
        setTimeout(() => {
            window.location = "./garagem.html";
        }, "2000");
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


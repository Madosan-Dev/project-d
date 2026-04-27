
function verificarFoto(){
    div_mensagem.innerHTML = ``;
    let link = url_foto.value;
    
    if(link != ''){
        div_foto.innerHTML = `<img src="${link}" class="foto_perfil"  onerror="this.onerror=null; this.src='assets/icones/foto_invalida.png';">`;
    }else{
        div_mensagem.innerHTML = `<p class="erro">Cole um Link de Imagem Valido!</p>`;
    }
    
}
let senhaVerificada = false;

function verificarSenha(){
    let senha = ipt_senha.value;
    let confSenha = ipt_confirmar_senha.value;
    let valido = 0;
    let maiusculas = senha != senha.toLowerCase();
    let minusculas = senha != senha.toUpperCase();
    let temEspecial = false
    let listaEspecial = ['@','!','#','$','%','^','&','*','()','/'];
    
    luz_semaforo.className = 'luz';
    luz_semaforo2.className = 'luz';
    msg_senha.innerHTML = ``;
    
    if(senha != ''){
        for(let i = 0; i < listaEspecial.length; i++){
            if(senha.includes(listaEspecial[i])){
                temEspecial = true;
            }
        }
        if(maiusculas){
            valido++;
        }
        if(minusculas){
            valido++;
        }
        
        if(temEspecial == true){
            valido++;
        }
        
        if(senha.length > 8){
            valido++;
        }
        
        
        if(valido < 2){
            luz_semaforo.classList.add('fraca');
            msg_senha.innerHTML = `<p class="senhaFraca">Senha Fraca</p>`;
        }else if(valido < 4){
            luz_semaforo.classList.add('media');
            msg_senha.innerHTML = `<p class="senhaMedia">Senha Média</p>`;
        }else{
            luz_semaforo.classList.add('forte');
            msg_senha.innerHTML = `<p class="senhaForte">Senha Forte</p>`;
            senhaVerificada = true;
        }
        
        
        
    }
    
    if(senha != '' && confSenha != ''){
        if(senha != confSenha){
            luz_semaforo2.classList.add('fraca');
            msg_conf.innerHTML = `<p class="senhaFraca">As senhas não conferem</p>`;
            campo_conf_senha.classList.add('shake')
            return false;
        }else{
            luz_semaforo2.classList.add('forte');
            msg_conf.innerHTML = `<p class="senhaForte">As senhas conferem</p>`;
            campo_conf_senha.classList.remove('shake')
        }
    }else{
        msg_conf.innerHTML = ``;
        
    }
    
}

function verificarDigitar(){
    let link = url_foto.value;
    let nome = ipt_nome.value
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    let confSenha = ipt_confirmar_senha.value;
    
    if(nome != ''){
        campo_nome.classList.remove('shake');
    }
    if(email != ''){
        campo_email.classList.remove('shake');
    }
    if(senha != ''){
        campo_senha.classList.remove('shake');
    }
    if(confSenha != ''){
        campo_conf_senha.classList.remove('shake');
    }
    if(link != ''){
        campo_url.classList.remove('shake')
    }
}

function cadastrar(){
    let link = url_foto.value;
    let nome = ipt_nome.value
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    let confSenha = ipt_confirmar_senha.value;
    let emailValido = false;
    
    let listaEmail = ['@sptech.school','@gmail.com','@outlook.com','@yahoo.com'];
    
    if(nome == ''){
        campo_nome.classList.add('shake');
    }
    if(email == ''){
        campo_email.classList.add('shake');
    }
    if(senha == ''){
        campo_senha.classList.add('shake');
    }
    if(confSenha == ''){
        campo_conf_senha.classList.add('shake');
    }
    if(link == ''){
        campo_url.classList.add('shake')
    }
    
    if(
        nome == '' ||
        email == '' ||
        senha == '' ||
        confSenha == '' ||
        link == ''
    ){
        div_mensagem.innerHTML = `<p class="erro">Preencha Todos os campos!</p>`;
        return false;
    }
    
    for(let i = 0; i < listaEmail.length;i++){
        if(email.includes(listaEmail[i])){
            emailValido = true;
        }
    }
    
    if(emailValido == false){
        div_mensagem.innerHTML = `<p class="erro">Email Invalido!</p>`;
        return false;
    }

    if(emailValido && senhaVerificada){
        campo_email.classList.remove('shake');
        campo_nome.classList.remove('shake');
        campo_senha.classList.remove('shake');
        campo_conf_senha.classList.remove('shake');
        campo_url.classList.remove('shake')

         fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                linkServer: link,
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
            }),
            })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {

               div_mensagem.innerHTML = `<p class="sucesso">Cadastro Realizado com sucesso! <br> Redirecionando para a tela de login...</p>`;

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

                finalizarAguardar();
                } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });

    return false;
    }
    
}

function logar(){
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    
    if(email == ''){
        campo_email.classList.add('shake');
    }
    if(senha == ''){
        campo_senha.classList.add('shake');
    }
    
    if(email == '' ||
        senha == '' 
    ){
        div_mensagem.innerHTML = `<p class="erro">Preencha Todos os campos!</p>`;
        return false;
    }

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.LINK_USUARIO = json.url;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;

                    setTimeout(function () {
                        window.location = "./dashboard/pistas.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");
                div_mensagem.innerHTML = `<p class="erro">Houve um erro ao tentar realizar o login!</p>`;

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
}

function verificarDigitarLog(){
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    
    if(email != ''){
        campo_email.classList.remove('shake');
    }
    if(senha != ''){
        campo_senha.classList.remove('shake');
    }
    
}

// funções relacionadas ao cadastro do carro

function verificarFotoCarro(){
    div_mensagem.innerHTML = ``;
    let link = url_foto.value;
    
    if(link != ''){
        div_foto.innerHTML = `<img src="${link}" class="foto_carro"  onerror="this.onerror=null; this.src='assets/icones/foto_invalida.png';">`;
    }else{
        div_mensagem.innerHTML = `<p class="erro">Cole um Link de Imagem Valido!</p>`;
    }
    
}
function cadastrarCarro(){
    let link = url_foto.value
    let marca = ipt_marca.value;
    let modelo = ipt_modelo.value;
    let potencia = ipt_potencia.value;
    let tracao = slt_tracao.value;

    if(link == ''){
        campo_url.classList.add('shake');
    }
    if(marca == ''){
        campo_marca.classList.add('shake');
    }
    if(modelo == ''){
        campo_modelo.classList.add('shake');
    }
    if(potencia == ''){
        campo_potencia.classList.add('shake');
    }
    if(tracao == 'nulo'){
        campo_tracao.classList.add('shake')
    }

       if(
        link == '' ||
        marca == '' ||
        modelo == '' ||
        potencia == '' ||
        tracao == ''
    ){
        div_mensagem.innerHTML = `<p class="erro">Preencha Todos os campos!</p>`;
        return false;
    }
    
}

function mascaraCavalo(){

    let potencia = ipt_potencia.value;
    
    //esse comando /\D/g tira todas as letras e só deixa números
    potencia = potencia.replace(/\D/g, "");

    if (potencia !== "") {
        potencia = `${potencia} CV`;
    }

    ipt_potencia.value = potencia;
}

function verificarDigitarCad(){
    let link = url_foto.value
    let marca = ipt_marca.value;
    let modelo = ipt_modelo.value;
    let potencia = ipt_potencia.value;
    let tracao = slt_tracao.value;

    if(link != ''){
        campo_url.classList.remove('shake');
    }
    if(marca != ''){
        campo_marca.classList.remove('shake');
    }
    if(modelo != ''){
        campo_modelo.classList.remove('shake');
    }
    if(potencia != ''){
        campo_potencia.classList.remove('shake');
    }
    if(tracao != 'nulo'){
        campo_tracao.classList.remove('shake')
    }

    
}
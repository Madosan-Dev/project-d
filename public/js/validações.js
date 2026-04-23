function verificarFoto(){
    let link = url_foto.value;

    if(link != ''){
        div_foto.innerHTML = `<img src="${link}" class="foto_perfil"  onerror="this.onerror=null; this.src='assets/icones/foto_invalida.png';">`;
    }else{
        div_mensagem.innerHTML = `<p class="erro">Cole um Link de Imagem Valido!</p>`;
    }

    if(onerror==null){
        div_mensagem.visibilty = true;
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
        div_senha.innerHTML = `<p class="erro">Senha Fraca</p>`;
    }else if(valido < 4){
        div_senha.innerHTML = `<p class="medio">Senha Média</p>`
    }else{
        div_senha.innerHTML = `<p class="forte">Senha Forte</p>`
    }
    
    if(senha != confSenha){
        div_mensagem.innerHTML = `<p class="erro">As senhas não conferem</p>`;
        return false;
    }else{
        div_mensagem.innerHTML = `<p class="forte">As senhas conferem</p>`;
    }
    
}

function cadastrar(){
    let nome = ipt_nome.value
    let email = ipt_email.value;
    let emailValido = false;

    let listaEmail = ['@sptech.school','@gmail.com','@outlook.com','@yahoo.com'];

    if(
        nome == '' ||
        email == '' 
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

}
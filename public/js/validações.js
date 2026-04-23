function verificarFoto(){
    let link = url_foto.value;

    div_foto.innerHTML = `<img src="${link}" class="foto_perfil">`;
}
function alterarDescricao(){
    const txtDescricao = document.getElementById('descricao_perfil');
    const btnAlterar = document.getElementById('btn_alt');
    const btnAtualizar = document.getElementById('btn_up');

    txtDescricao.removeAttribute('readonly')
    txtDescricao.classList.add('editavel');
    txtDescricao.focus();

    btnAlterar.style.display = 'none';
    btnAtualizar.style.display = 'block';
}

function atualizarDescricao(){
    let descricao = descricao_perfil.value;
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/usuarios/atualizarDescricao/${idUsuario}` , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                descricaoServer: descricao
            }),
            })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                     div_mensagem.innerHTML = `<p class="sucesso">Descrição salva com sucesso!</p>`;
                setTimeout(() => {
                    window.location = "perfil.html";
                }, "2000");

                finalizarAguardar();
                } else {
                throw "Houve um erro ao salvar a descricao!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                finalizarAguardar();
        });
}
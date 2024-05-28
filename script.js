//menu de hamburguer
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {

    if (menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado")

        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"

    }
    else {
        menu.classList.add("menu-fechado")


        iconeX.style.display = "none"


        iconeBarras.style.display = "inline"

    }

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    iconeBarras.style.display = "none"

    iconeX.style.display = "inline"
}

// formulário
function formularioOrcamento(event) {
    //valores dos inputs

    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value

    //colocá-los em um objeto

    let dadosCadastro = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    console.log(dadosCadastro)

    // POST - Método HTTP
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosCadastro)
    })

        //CASO SUCESSO
        .then(resposta => {
            console.log(resposta);

            //limpar os inputs
            document.querySelector("#contato form").reset()

            //mostrar um alert de sucesso
            alert("Solicitação enviada com sucesso!😘")
        })
        .catch(erro => {
            //CASO ERRO
            //mostrar alert com mensagem de erro
            console.log(erro);
            alert("Erro na solicitação🫤 Verifique seus dados")
        })

    event.preventDefault()
}


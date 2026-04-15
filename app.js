function criar_cartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")
    let cartao = document.createElement("article")
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="conteudo">
                <h3>${categoria}</h3>
                <div class="pergunta">
                    ${pergunta}
                </div>
                <div class="resposta">
                    ${resposta}
                </div>
            </div>
    `

    container.appendChild(cartao)
}

const add = document.getElementById('add')
add.addEventListener('click', function(){
    alert("Você está criando um novo cartão")
    let title = prompt("Insira a categoria")
    let front = prompt("Escreva a pergunta do cartão")
    let back = prompt("Escreava a resposta")
    criar_cartao(title, front, back)
})
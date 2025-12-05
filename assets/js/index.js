let imagens =[
    '../../imagens/imagem_rosa_1.png',
    '../../imagens/imagem_rosa_2.png',
    '../../imagens/imagem_rosa_3.png'
]

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src = imagens [indiceAtualListaImagem]
}

indiceAtualListaImagem = 0


setInterval(function() {
    exibirImagem()
    indiceAtualListaImagem++

    if(indiceAtualListaImagem > 2){
        indiceAtualListaImagem = 0
    }

},5000);



exibirImagem()
indiceAtualListaImagem++
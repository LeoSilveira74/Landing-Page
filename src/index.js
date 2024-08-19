const imagens = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){    
    imagens[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function () {
    if(imagemAtual !== imagens.length - 1) {
        imagemAtual++        
    }

    mostrarOuEsconderSetas()
    esconderImagens()
    mostrarImagem()
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
    }

    mostrarOuEsconderSetas()
    esconderImagens()
    mostrarImagem()
})

function mostrarOuEsconderSetas(){
    if(imagemAtual === imagens.length - 1){
        setaAvancar.classList.add('seta-apagada')
    } else {
        setaAvancar.classList.remove('seta-apagada')
    }

    if(imagemAtual === 0){
        setaVoltar.classList.add('seta-apagada')
    } else {
        setaVoltar.classList.remove('seta-apagada')
    }

}

let avatar = document.querySelector('#avatar')
let bloco = document.querySelector('#bloco')

function pular(){
    if(avatar.classList != 'animar'){
        avatar.classList.add('animar')
    }

    setTimeout(function(){
        avatar.classList.remove('animar')
    },500)
}

var testarColisao = setInterval( function(){

    var topoAvatar = parseInt(
        window.getComputedStyle(avatar).getPropertyValue('top')
    )
    var EsquerdaBloco = parseInt(
        window.getComputedStyle(bloco).getPropertyValue('left')
    )
    if(EsquerdaBloco < 20 && EsquerdaBloco > 0 && topoAvatar >= 130){
        bloco.style.animation = 'none'
        bloco.style.display = 'none'
        alert('Você perdeu')
    }
},10)
window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#cabeça')
    header.classList.toggle('rolagem', window.scrollY > 0)
})
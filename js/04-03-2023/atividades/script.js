const btnContar = document.getElementById('btn')
console.log(btnContar)
const inputtxt = document.getElementById('inputtxt')
const resultado = document.getElementById('resultado')
btnContar.addEventListener('click', clicou)
//trim remove espaços do inicio e do fim
//replaceAll troca tudo repalce troca o primeiro
function clicou(){
    const input = inputtxt.value
    const letras = input.replaceAll(' ','').split('').length
    const palavras = input.trim().split(' ').length
    resultado.innerText = `O texto tem ${letras} letras e ${palavras} palavras`
    resultado.classList.add('alert', 'alert-primary')


}

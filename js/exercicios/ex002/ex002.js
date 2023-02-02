// Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    var nomeCompleto = nome + sobrenome
}
var nome= document.querySelector('input#nome')
var sobrenome= document.querySelector('input#sobrenome')
const retorno = `Seu nome completo é ${nomeCompleto}!`
var resultado = document.querySelector('div#retorno')
resultado = retorno.innerHTML(`<p> Seu nome é ${nomeCompleto}!`)

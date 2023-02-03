// Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    const nomeCom = nome + sobrenome
    return nomeCom
}
const nome = prompt('Digite seu primeiro nome')
var sobrenome = prompt('Digite seu sobrenome')
const retorno = nomeCompleto(nome, sobrenome)
alert(`Seu nome completo é ${retorno}`)
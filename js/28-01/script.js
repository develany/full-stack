function verificaValor(valor){

const resposta = valor ? `É truthy` : `É falsy`
return resposta
}
const entrada = +prompt('digite um número')
const retorno = verificaValor(entrada)
alert (retorno)

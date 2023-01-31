//Crie uma função matemática que retorne o perímetro de um quadrado
function perimetro(lado){
    const perimetro = lado*4
    return perimetro
}
const lado = +prompt('digite o valor da aresta do quadrado')
const retorno = perimetro(lado)
alert (retorno)

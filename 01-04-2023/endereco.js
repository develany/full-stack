const url="https://viacep.com.br/ws/60130160/json/"

fetch(url)
.then((resposta) => resposta.json()) 
.then((data) => render(data))

function render(cep) {

    const cep = document.getElementById("cep")

    cep.forEach(cep => {

        const elemento = document.createElement("h2")
        elemento.innerText = cep.nome
        elemento.value = cep.value
   
        
    });
}
const select = document.getElementById("listaEstados")

select.addEventListener('change', (evento) => {

    const url = https://servicodados.ibge.gov.br/api/v1/localidades/estados/${evento.target.value}/municipios


    // Busca as cidades e coloca na lista select
    fetch(url)
        .then((resposta) => resposta.json())
        .then((data) => render(data))

})
// Inciando a parte dos estados

const urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

fetch(urlEstados)
    .then((respostaEstados) => respostaEstados.json())
    .then((listaEstados) => renderEstados(listaEstados))

function renderEstados(estados) {

    const select = document.getElementById("listaEstados")

    estados.forEach(estado => {
        const elemento = document.createElement("option");
        elemento.innerText = estado.nome;
        elemento.value = estado.sigla;


        select.appendChild(elemento)
    });
}


function render(cidades) {

    const listaCidades = document.getElementById("listaCidades")

    listaCidades.innerHTML = ''

    cidades.forEach(cidade => {

        const elemento = document.createElement("option")
        elemento.innerText = cidade.nome
        elemento.value = cidade.nome

        listaCidades.appendChild(elemento)
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
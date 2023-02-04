//document.body.innerText = 'Bom dia'
const saudacao = document.getElementById('saudacao')

const horaMomento = new Date().getHours()
//const nomeUsuario = ''
if(horaMomento<12){
    saudacao.innerHTML = 'Bom dia'
}else if (horaMomento>=18){
    saudacao.innerHTML = 'Boa noite'
}else{
    saudacao.innerHTML = 'Boa tarde'
}
const lista = ['Ivan', ' Ari', 'Ranel', 'Ari' ]

//for (let i=0; i < lista.length; i++){
 //   console.log(lista [i])
//}
//let i = 0
//while(i<5){
//    console.log(i)
 //   i=i+2
//}
//let respota
//do{
 //   respota = confirm('Vai me passa im pix?')
//}while(!respota)

function concaten1 (texto, index){
    alert(index + '-' + texto)
}
lista.forEach(concaten1)
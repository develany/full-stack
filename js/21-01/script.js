function ano (){
 idade=prompt('Qual é a sua idade?')
if(idade>=18){
    console.log(alert('É um adulto'))
}
else if (idade>=14){
    console.log(alert('É um adolescente'))
}
else if (idade<14){
    console.log(alert('É uma criança'))
}
else{
    console.log(alert('Você não digtou uma idade'))
}
}
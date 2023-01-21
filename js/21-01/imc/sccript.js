peso=(prompt('Digite seu peso'))
altura=(prompt('Digite sua altura'))
imc=(peso/(altura*altura)).toFixed(2)
if(imc<18.5){
    alert(`Seu imc é ${imc} e sua classificação é MAGREZA`)
} else if(imc<=24.9){
    alert(`Seu imc é ${imc} e sua classificação é NORMAL`)
}
else if(imc<=29.9){
    alert(`Seu imc é ${imc} e sua classificação é SOBREPESO`)
}
else if(imc<=39.9){
    alert(`Seu imc é ${imc} e sua classificação é OBESIDADE`)
}
else {
    alert(`Seu imc é ${imc} e sua classificação é OBESIDADE GRAVE`)
}
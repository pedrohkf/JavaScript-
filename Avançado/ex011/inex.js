let nome = prompt('Informe seu nome');
let numero = Number(prompt('Informe sua idade'));

if(numero === String || numero === 0 ){
    alert('Número inválido');
} else if(numero >= 5 && numero <= 10){
    alert(`Nome: ${nome} Categoria: Infantil`)
} else if(numero >= 11 && numero <= 15){
    alert(`Nome: ${nome} Categoria: Juvenil`)
} else if(numero >= 16 && numero <= 20){
    alert(`Nome: ${nome} Categoria: Junior`)
} else if(numero >= 21 && numero <= 25){
    alert(`Nome: ${nome} Categoria: Profissional`)
}
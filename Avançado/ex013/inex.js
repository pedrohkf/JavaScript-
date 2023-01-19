let nome = prompt('Informe seu nome');
let idade = Number(prompt('Informe sua idade'));

if(idade <=17){
    alert(`${nome} você é menor de idade.`)
} else if(idade <= 59){
    alert(`${nome} você é maior de idade.`)
} else if(idade >=60){
    alert(`${nome} você é idoso.`)
}
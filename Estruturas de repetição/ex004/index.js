let base = prompt('Informe o valor da base do seu triângulo');
let altura = prompt('Informe o valor da altura do seu triângulo');

if(base <= 0 && altura <= 0 ) {
    alert('Valor inválido')
 } else {
    alert(`A área do seu triângulo é ${base * altura / 2}`);
 }



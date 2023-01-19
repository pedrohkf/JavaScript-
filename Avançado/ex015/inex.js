const peso = Number(prompt('Informe seu peso'));
const altura = Number(prompt('Informe sua altura'));
const imc = peso / altura ** 2;

if (imc >= 40) alert('Obesidade grau 3');
  if (imc >= 35 && imc <= 39.9) alert('Obesidade grau 2');
  if (imc >= 30 && imc <= 34.9) alert('Obesidade grau 1');
  if (imc >= 25 && imc <= 29.9) alert('Sobrepeso');
  if (imc >= 18.5 && imc <= 24.9) alert('Peso normal');
  if (imc < 18.5) alert('Abaixo do peso');
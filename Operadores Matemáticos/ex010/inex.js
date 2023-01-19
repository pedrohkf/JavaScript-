let distancia = prompt('Infome a distância percorrida em Quilômetro');
let consumo = prompt('Informe o consumo do carro em Km/Litro');
let valor = prompt('Informe o valor do litro do combustível');

let resultado = distancia / consumo * valor;

alert(`O seu gasto será de R$ ${resultado},00`);
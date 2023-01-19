let valor = Number(prompt('Informe o valor do produto'));
let desconto = Number(prompt('Informe o desconto do produto em porcentagem'));
let descontoNumero = desconto * valor / 100;

alert(`O valor a ser pago é de R$ ${valor - descontoNumero},00 e o valor de desconto é de R$ ${descontoNumero},00`)


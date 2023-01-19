let matricula = prompt('Informe a sua matrícula');
let nome = prompt('Informe seu nome');
let salario = Number(prompt('Informe seu salário fixo'));
let vendas = Number(prompt('Informe o valor das vendas'));

if(salario <= 1500) {
    let conta = (salario * 2) / 100; 
    let resultado = conta + salario;
    alert(`Seu nome é ${nome}, matricula ${matricula}, seu salário fixo é de R$ ${salario},00 e seu salário total é de R$ ${resultado},00`);

} else if(salario >= 1500) {
    let conta = (salario * 4) / 100; 
    let resultado = conta + salario;
    alert(`Seu nome é ${nome}, matricula ${matricula}, seu salário fixo é de R$ ${salario},00 e seu salário total é de R$ ${resultado},00`);
}


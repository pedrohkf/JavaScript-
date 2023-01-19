let nome = prompt('Inoforme seu nome');
let salarioBruto = prompt('Informe o seu salário bruto')
let salarioLiquido = salarioBruto * 10 / 100;

alert(`
    Nome: ${nome}
    Salário Bruto: ${salarioBruto}
    Salário Líquido: ${salarioBruto-salarioLiquido}
    `)
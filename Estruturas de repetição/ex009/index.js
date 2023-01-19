let numero;
let numeros = [];
let total = 0;
let media = 0
let numerosPares = 0;
let contadorPar = -1;
let contadorImpar = 0;


do {
    numero = Number(prompt("Escreva um número inteiro"));

    if(numero >= 1 ){
        numeros.push(numero);
        total = numeros.reduce(function(ac, valor) {
            ac += valor;
            console.log(ac)
            return ac;
        }, 0)  

        media = total / numeros.length;
    }

    if(numero % 2 === 0) {
        contadorPar++;
    } else {
        contadorImpar++;
    }

} while (numero >= 1);

alert(
    `Números Digitados: ${numeros}  Média: ${media} Números pares: ${contadorPar}  Números Ímpares: ${contadorImpar}`
    );

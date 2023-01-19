var total = 0;
var maiorNumero = 0;
var menorNumero;
let numero;
var contador = 0;

do {
    numero = Number(prompt("Escreva um número inteiro"));

    if(numero >= 0 ){
        contador++;
        total = total + numero;

        if(maiorNumero < numero){
            maiorNumero = numero;
        } 
        if(menorNumero > numero || menorNumero === undefined) {
            menorNumero = numero;
        }
    } 

} while (numero >= 0);

alert(`O seu maior número é ${maiorNumero}`);
alert(`O seu menor número é ${menorNumero}`);
alert(`A média do seus números é ${total / contador}`);



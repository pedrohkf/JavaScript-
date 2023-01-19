let numero = [5, -10, -3, -2, 7, 8];
let valoresNegativos = 0;

for(let i of numero){
    if(i < 0){
        valoresNegativos++;
    }
}

console.log(valoresNegativos);

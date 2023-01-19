let numero = Number(prompt('Infome um número'));

if(numero % 7 === 0 && numero % 3 === 0){
    alert('Esse número é divisivel por 3 e 7');
} else if(numero % 3 === 0 ) {
    alert('Esse número é divisivel por 3');
}else if(numero % 7 === 0) {
    alert('Esse número é divisivel por 7');
}else{
    alert('Esse número não é divisivel nem por 3 e nem por 7');
}


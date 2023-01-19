let num = Number(prompt('Digite um número'));

if(num == 0 ){
        window.alert('Digite um número válido!')
} else {
    let numero = Number(num);
    let conta = 1;
    for(let i = 0; conta <= 10; conta++) {
        alert(`${numero} x ${conta} = ${numero * conta}`)
        console.log(`${numero} x ${conta} = ${numero * conta}`)
    }
}


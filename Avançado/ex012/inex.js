let km = prompt('Informe a quilômetragem a ser percorrida');
let moto = prompt('Informe seu tipo de moto. Sendo: A-Faz 24km por litro. B-Faz 20km po litro. C-7km por litro');

if(moto === 'a' || moto === 'A' ){
    alert(`Você gastará ${Math.floor(km / 24)} litros de combustível`);
} else if(moto === 'b' || moto === 'B') {
    alert(`Você gastará ${Math.floor(km / 20)} litros de combustível`);
} else if(moto === 'c' || moto === 'C'){
    alert(`Você gastará ${Math.floor(km / 7 )} litros de combustível`);
}
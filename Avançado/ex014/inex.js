let idade = Number(prompt('Infome sua idade'));

if(idade < 16){
    alert('Não eleitor');
} else if(idade >= 18 && idade <= 65) {
    alert('Eleitor obrigatório');
} else if(idade >= 16 && idade < 18 || idade > 65) {
    alert('Eleitor facultativo');
}
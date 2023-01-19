let nome = 'Pedro';
let notas = [10, 9, 10, 8]
let media = 0;

for(let indice in notas){
    media += notas[indice];
}

media /= notas.length;

console.log(`Seu nome é ${nome}, suas notas são ${notas} e sua media é ${media} `)
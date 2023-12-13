// Crie um programa que peça um número e verifique se ele é positivo, negativo ou zero.
let valor = parseInt(prompt('Informe um numero: '));

if(valor > 0) {
    console.log('Positivo');
} else if(valor < 0) {
    console.log('Negativo');
} else {
    console.log('Zero');
}
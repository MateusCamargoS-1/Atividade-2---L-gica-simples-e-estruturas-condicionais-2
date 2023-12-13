// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let valor1 = Number(prompt('Informe o primeiro numero: '));
let valor2 = Number(prompt('Informe o Segundo numero: '));

let operacao = prompt('Informe a operação que deseja realizar: ');

let calculo = 0;

switch(operacao) {
    case '+':
        calculo = valor1 + valor2
        console.log('o resultado calculo dessa operação é: ', calculo);
        break;
    case '-':
        calculo = valor1 - valor2
        console.log('o resultado calculo dessa operação é: ', calculo);
        break;
    case '/':
        calculo = valor1 / valor2
        console.log('o resultado calculo dessa operação é: ', calculo);
        break;
    case '*':
        calculo = valor1 * valor2
        console.log('o resultado calculo dessa operação é: ', calculo);
        break;
    default:
        console.log('Operação informada não é valida.')
}
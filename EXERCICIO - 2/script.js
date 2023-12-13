// Crie um programa que peça um número de 1 a 7 e exiba o dia da semana correspondente utilizando a 
// estrutura condicional switch.

let valor = parseInt(prompt('Informe um numero: '));

switch(valor) {
    case 1:
        document.write(`<h1>Domingo</h1>`);
        break;
    case 2:
        document.write(`<h1>Segunda-Feira</h1>`);
        break;
    case 3:
        document.write(`<h1>Terça-Feira</h1>`);
        break;
    case 4:
        document.write(`<h1>Quarta-Feira</h1>`);
        break;
    case 5: 
        document.write(`<h1>Quinta-Feira</h1>`);
        break;
    case 6:
        document.write(`<h1>Sexta-Feira</h1>`);
        break;
    case 7: 
        document.write(`<h1>Sabado</h1>`)
    default:
        document.write(`<h1>Informe um valor correspondente a um dia da semana.</h1>`);
        break;
}
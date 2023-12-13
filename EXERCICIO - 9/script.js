// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidadeCarro = parseInt(prompt('Informe a velocidade do carro: '));
let velocidadePermitida = 80;
let velocidadeExcedida;

if(velocidadeCarro > 80) {
    velocidadeExcedida = velocidadeCarro - velocidadePermitida;
    valorMulta = velocidadeExcedida * 5;

    document.write(`<h1>Velocidade Permitida: ${velocidadePermitida}</h1>`);
    document.write('<br>');
    document.write(`<h2>Velocidade do Usuario: ${velocidadeCarro}</h2>`);
    document.write('<br>');
    document.write(`<h2>Usuário multado. valor da multa: ${valorMulta.toFixed(2)}</h2>`);
} else {
    document.write(`<h1>Velocidade Permitida: ${velocidadePermitida}</h1>`);
    document.write('<br>');
    document.write(`<h2>Velocidade do Usuario: ${velocidadeCarro}</h2>`);
    document.write('<br>');
    document.write(`<h1>Velocidade dentro do limite permitido.</h1>`);
}

// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

const custoFabrica = parseFloat(prompt('Informe o custo de fábrica: '));

const custoFinal = custoFabrica + (custoFabrica * 0.28) + (custoFabrica * 0.45);


console.log('O custo final ao consumidor é: R$', custoFinal.toFixed(2));

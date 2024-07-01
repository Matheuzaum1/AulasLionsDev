const prompt = require('prompt-sync')();
// Solicita ao usuário um número
let numero = prompt("Por favor, insira um número:");

// Converte o número para uma string, separa em um array de dígitos, ordena em ordem decrescente, e junta novamente em uma string
let maiorNumero = numero.split('').sort((a, b) => b - a).join('');

// Exibe o maior número possível formado pelos dígitos fornecidos
console.log("O maior número possível com esses dígitos é: " + maiorNumero);

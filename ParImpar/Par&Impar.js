const prompt = require("prompt-sync")();

function determinarParOuImpar(numero) {
  let numStr = numero.toString();

  let soma = 0;

  for (let i = 0; i < numStr.length; i++) {
    soma += parseInt(numStr[i]);
  }

  if (soma % 2 === 0) {
    return "impar";
  } else {
    return "par";
  }
}

let numero = prompt("Digite um número: ");

if (!isNaN(numero) && numero.trim() !== "") {
  numero = parseInt(numero);
  console.log(
    `O número ${numero} é ${determinarParOuImpar(
      numero
    )} com base na soma dos seus dígitos.`
  );
} else {
  console.log("Entrada inválida. Por favor, digite um número válido.");
}

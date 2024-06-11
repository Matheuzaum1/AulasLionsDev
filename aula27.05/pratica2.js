let numeros = [];
let maiorNumero = Number.NEGATIVE_INFINITY;
let contador = 0;

console.log("Digite três números para determinar o maior entre eles:");

process.stdin.on("data", function(data) {
    data = data.toString().trim();
    let numero = parseFloat(data);

    if (!isNaN(numero)) {
        numeros.push(numero);
        contador++;

        if (contador === 3) {
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i] > maiorNumero) {
                    maiorNumero = numeros[i];
                }
            }
            console.log("O maior número é: " + maiorNumero);
            process.exit();
        }
    } else {
        console.log("Por favor, insira um número válido.");
    }
});

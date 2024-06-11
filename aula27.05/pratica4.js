let numero;

console.log("Digite um número para calcular o seu fatorial: ");

process.stdin.on("data", function(data) {
    numero = parseInt(data.toString().trim());

    if (!isNaN(numero) && numero >= 0) {
        var fatorial = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é ${fatorial}`);
    } else {
        console.log("Por favor, insira um número inteiro não negativo válido.");
    }

    process.exit();
});
    
function calcularFatorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

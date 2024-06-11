// Existem 4 erros

var nome = ""

process.stdin.on("data", function (data) {
    nome = data.toString().trim();
    console.log("Olá " + nome);
})


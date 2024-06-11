
var num = ""
var opcao = ""

console.log("Jogo da Advinhação!");
console.log("Realize sua tentativa")

process.stdin.on("data", function(data){
    if(!num){
        var random = Math.floor(Math.random() * 1001);
        num = data.toString().trim();
            if(num == random){
            console.log("Parabéns! Você acertou!")

            }else{
            console.log("Você errou :( ")
            }
            console.log("Deseja tentar novamente?")
            opcao = ""
    opcao = data.toString().trim().toLowerCase()
        if(opcao != "sim" && opcao != "s"){
            console.log("Nos vemos na próxima!")
            process.exit();
        }else{
                num = ""
                console.log("Digite um número")
             }
    }



})
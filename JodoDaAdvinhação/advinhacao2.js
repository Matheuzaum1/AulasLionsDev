var num = ""
var i = 1

let random = Math.floor(Math.random() * 101 )

console.log("Jogo da Advinhação!")
console.log("Digite um número, você tem 3 tentativas!")
console.log(random)
process.stdin.on("data", function(data){
    if(i == 3 ){
        console.log("Você atingiu o número máximo de tentativas :( ")
        console.log("O número era : " + random)
        random = Math.floor(Math.random() * 101 )
        console.log("Digite o póximo numero:")
        i = 0

    }else{
        num = data.toString().trim()
        if(num == random){
                console.log("Parabéns, você acertou!!!!!")
                process.exit()
         }else if(num == random - 5 || num == random + 5 ){
                console.log("Seu número está próximo, continue tentando!!")
                console.log("você tem mais " + (3 - i)  + " tentativas")
                i++
         }else{
                console.log("Errou feio,errou rude! Tente novamente, você tem mais " + (3 - i)  + " tentativas")
                i++
            }
    }
})
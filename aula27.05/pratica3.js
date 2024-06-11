console.log("Insira um número")

process.stdin.on("data", function(data){
    data = parseInt(data)
        if(data % 2 == 0){
            console.log("Seu número é par!")
        }else{
            console.log("Seu número é impar!")
            
        }
        process.exit()
})
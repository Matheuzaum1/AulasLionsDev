let arrayNum = []
let opcao = "";
let num;
let soma = 0;
let i = 0;

console.log("Insira um numero")

process.stdin.on("data", function(data){
 
    if(!num){
        num = Number(data.toString().trim());
        arrayNum.push(num);
        console.log("Deseja adicionar mais numeros?")
        opcao = "";
    }else if(!opcao){

        opcao = data.toString().trim().toLowerCase();
          if(opcao != "sim" && opcao != "s"){
            console.log("Numeros")
            arrayNum.forEach(function(media){
                console.log(media)
            })
            for(i = 0; i < arrayNum.length; i++){
                soma = soma + arrayNum[i]
                var med = soma/arrayNum.length
                console.log("A media é : " + med )

                process.exit();
            }
          }else{
            num = ""
            console.log("Digite o próximo numero")
          }
    }

            
           
        

})


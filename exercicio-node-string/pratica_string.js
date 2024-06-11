/* var nome = "João Vitor"; 
var sobrenome = " Da Silva Souza "

console.log("Hello World! " + nome + sobrenome);*/

console.log("Digite seu nome : " );

process.stdin.on('data', function(data){

    var user = data.toString();
    console.log(" Usuário" + user +  "conectado com sucesso");
    process.exit();

});
    

    


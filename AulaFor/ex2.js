let lista = [];
let hobbie;
let resp;

console.log("Digite um hobby");
process.stdin.on("data", function(data){
    
    
    if(!hobbie){

        hobbie = data.toString().trim();
        lista.push(hobbie);
        console.log("Deseja adicionar outro hobby?")
        resp = ""
    }else if (!resp){
        resp = data.toString().trim().toLowerCase();

        if(resp != "sim" || resp != "s"){
            console.log("Hobbies Digitados");
            lista.forEach(function(objetos){
                console.log(objetos)
            })
            process.exit();

            
        }else{
            hobbie = ""
            console.log("Digite o próximo hobby")
            
        }
    } 
})

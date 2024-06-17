let pessoa = {
    nome: "Marcelo",
    email: "marcelo01@gmail.com",
    idade: 22
};

let pessoa2 = {
    nome: "Ana Maria",
    email: "anamaria02@gmail.com",
    idade: 40
};

let pessoa3 = {
    nome: "João Vitor",
    email: "jv03@gmail.com",
    idade: 18
};

let users = [pessoa, pessoa2, pessoa3];

console.log("Digite seu email para verificação:");

process.stdin.on('data', function(data){
    data = data.toString().trim();
    console.log("Verificando...");
    let emailFound = false;

    users.forEach(user => {
        if (!emailFound && user.email === data) {
            console.log(user);
            emailFound = true;
        }
    });

    if (!emailFound) {
        console.log("Email não encontrado no sistema.");
    }

    // Finaliza o processo após a verificação
    process.exit();
});

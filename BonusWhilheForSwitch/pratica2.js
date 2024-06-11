let pessoa = {
    nome: "",
    idade: "",
    salario: "",
    sexo: "",
    estadoCivil: ""
};

console.log("Digite seu nome:");

process.stdin.on("data", function(data) {
    data = data.toString().trim();

    if (!pessoa.nome) {
        pessoa.nome = data;
        if (pessoa.nome.length < 3) {
            console.log("Escreva seu nome novamente! Com mais de 3 caracteres");
            pessoa.nome = "";
        } else {
            console.log("Seu nome é: " + pessoa.nome);
            console.log("Agora insira sua idade:");
        }
    } else if (!pessoa.idade) {
        pessoa.idade = parseInt(data);
        if (pessoa.idade === 0 || pessoa.idade > 150 || isNaN(pessoa.idade)) {
            console.log("Digite uma idade válida, entre 1 e 150");
            pessoa.idade = "";
        } else {
            console.log("Sua idade é: " + pessoa.idade);
            console.log("Agora insira seu salário:");
        }
    } else if (!pessoa.salario) {
        pessoa.salario = parseFloat(data);
        if (pessoa.salario === 0 || isNaN(pessoa.salario)) {
            console.log("Seu salário precisa ser maior que 0, digite novamente!");
            pessoa.salario = "";
        } else {
            console.log("Seu salário é: " + pessoa.salario);
            console.log("Selecione seu sexo: F para feminino, M para masculino e N para não declarar:");
        }
    } else if (!pessoa.sexo) {
        let opcao = data.toLowerCase();
        switch(opcao) {
            case 'f':
                pessoa.sexo = "Feminino";
                break;
            case 'm':
                pessoa.sexo = "Masculino";
                break;
            case 'n':
                pessoa.sexo = "Não declarado por opção do usuário";
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                return;
        }
        console.log("Seu sexo é: " + pessoa.sexo);
        console.log("Digite seu estado civil: S para solteiro, C para casado, V para viúvo e D para divorciado:");
    } else if (!pessoa.estadoCivil) {
        let opcao2 = data.toLowerCase();
        switch(opcao2) {
            case 's':
                pessoa.estadoCivil = "Solteiro";
                break;
            case 'c':
                pessoa.estadoCivil = "Casado";
                break;
            case 'v':
                pessoa.estadoCivil = "Viúvo";
                break;
            case 'd':
                pessoa.estadoCivil = "Divorciado";
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                return;
        }
        console.log("Seu estado civil é: " + pessoa.estadoCivil);
        console.log("=============================================");
        console.log("Imprimindo dados:");
        console.log("Nome: " + pessoa.nome);
        console.log("Idade: " + pessoa.idade + " anos");
        console.log("Salário: R$ " + pessoa.salario);
        console.log("Sexo: " + pessoa.sexo);
        console.log("Estado Civil: " + pessoa.estadoCivil);
        process.exit();
    }
});

let arrayConsultas = [];
let pessoa = {
    paciente: "",
    medico: "",
    data: "",
    hora: ""
};
let estadoAtual = "menu"; // Estado inicial
let etapaAdicionar = 0; // Etapa do processo de adicionar consulta

console.log(
    "=== Menu ===\n" +
    "1. Adicionar uma nova consulta\n" +
    "2. Listar todas as consultas\n" +
    "3. Atualizar uma consulta existente\n" +
    "4. Cancelar uma consulta\n" +
    "5. Sair\n" +
    "Escolha uma opção:"
);

process.stdin.on("data", function(data) {
    data = data.toString().trim();

    if (estadoAtual === "menu") {
        switch (data) {
            case "1":
                estadoAtual = "adicionar";
                console.log("Qual é o nome do paciente?");
                break;

            case "2":
                if (arrayConsultas.length === 0) {
                    console.log("Não há consultas agendadas.");
                } else {
                    console.log("=== Lista de Consultas ===");
                    arrayConsultas.forEach(consulta => {
                        console.log(`Paciente: ${consulta.paciente}, Médico: ${consulta.medico}, Data: ${consulta.data}, Hora: ${consulta.hora}`);
                    });
                }
                estadoAtual = "menu";
                console.log(
                    "\n=== Menu ===\n" +
                    "1. Adicionar uma nova consulta\n" +
                    "2. Listar todas as consultas\n" +
                    "3. Atualizar uma consulta existente\n" +
                    "4. Cancelar uma consulta\n" +
                    "5. Sair\n" +
                    "Escolha uma opção:"
                );
                break;

            case "3":
                estadoAtual = "atualizar";
                console.log("Digite o nome do paciente para atualizar:");
                break;

            case "4":
                estadoAtual = "excluir";
                console.log("Digite o nome do paciente para excluir:");
                break;

            case "5":
                console.log("Saindo...");
                process.exit();
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                console.log(
                    "\n=== Menu ===\n" +
                    "1. Adicionar uma nova consulta\n" +
                    "2. Listar todas as consultas\n" +
                    "3. Atualizar uma consulta existente\n" +
                    "4. Cancelar uma consulta\n" +
                    "5. Sair\n" +
                    "Escolha uma opção:"
                );
        }
    } else if (estadoAtual === "adicionar") {
        if (etapaAdicionar === 0) {
            pessoa.paciente = data;
            console.log("Qual é o médico que fará a consulta?");
            etapaAdicionar++;
        } else if (etapaAdicionar === 1) {
            pessoa.medico = data;
            console.log("Qual será o dia do atendimento?");
            etapaAdicionar++;
        } else if (etapaAdicionar === 2) {
            pessoa.data = data;
            console.log("Qual será o horário da consulta?");
            etapaAdicionar++;
        } else if (etapaAdicionar === 3) {
            pessoa.hora = data;
            arrayConsultas.push({ ...pessoa }); // Adiciona uma cópia do objeto
            console.log("Consulta adicionada com sucesso!");
            pessoa = { paciente: "", medico: "", data: "", hora: "" }; // Reseta o objeto
            etapaAdicionar = 0;
            estadoAtual = "menu";
            console.log(
                "\n=== Menu ===\n" +
                "1. Adicionar uma nova consulta\n" +
                "2. Listar todas as consultas\n" +
                "3. Atualizar uma consulta existente\n" +
                "4. Cancelar uma consulta\n" +
                "5. Sair\n" +
                "Escolha uma opção:"
            );
        }
    } else if (estadoAtual === "atualizar") {
        const consulta = arrayConsultas.find(c => c.paciente === data);
        if (consulta) {
            console.log("Digite o novo médico (ou pressione Enter para manter):");
            estadoAtual = "atualizar_medico";
            pessoa = consulta;
        } else {
            console.log("Consulta não encontrada!");
            estadoAtual = "menu";
            console.log(
                "\n=== Menu ===\n" +
                "1. Adicionar uma nova consulta\n" +
                "2. Listar todas as consultas\n" +
                "3. Atualizar uma consulta existente\n" +
                "4. Cancelar uma consulta\n" +
                "5. Sair\n" +
                "Escolha uma opção:"
            );
        }
    } else if (estadoAtual === "atualizar_medico") {
        if (data) pessoa.medico = data;
        console.log("Digite a nova data (ou pressione Enter para manter):");
        estadoAtual = "atualizar_data";
    } else if (estadoAtual === "atualizar_data") {
        if (data) pessoa.data = data;
        console.log("Digite o novo horário (ou pressione Enter para manter):");
        estadoAtual = "atualizar_hora";
    } else if (estadoAtual === "atualizar_hora") {
        if (data) pessoa.hora = data;
        console.log("Consulta atualizada com sucesso!");
        pessoa = { paciente: "", medico: "", data: "", hora: "" };
        estadoAtual = "menu";
        console.log(
            "\n=== Menu ===\n" +
            "1. Adicionar uma nova consulta\n" +
            "2. Listar todas as consultas\n" +
            "3. Atualizar uma consulta existente\n" +
            "4. Cancelar uma consulta\n" +
            "5. Sair\n" +
            "Escolha uma opção:"
        );
    } else if (estadoAtual === "excluir") {
        const index = arrayConsultas.findIndex(c => c.paciente === data);
        if (index !== -1) {
            arrayConsultas.splice(index, 1);
            console.log("Consulta excluída com sucesso!");
        } else {
            console.log("Consulta não encontrada!");
        }
        estadoAtual = "menu";
        console.log(
            "\n=== Menu ===\n" +
            "1. Adicionar uma nova consulta\n" +
            "2. Listar todas as consultas\n" +
            "3. Atualizar uma consulta existente\n" +
            "4. Cancelar uma consulta\n" +
            "5. Sair\n" +
            "Escolha uma opção:"
        );
    }
});

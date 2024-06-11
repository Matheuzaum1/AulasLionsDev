let fahrenheit = "";
let celsius = "";

console.log("Insira um número para transformar!");

process.stdin.on("data", function(data) {
    data = data.toString().trim();
    
    if (!isNaN(data) && data !== "") {
        let temperatura = parseFloat(data);
        console.log("Deseja transformar esse número de Celsius para Fahrenheit (CF) ou de Fahrenheit para Celsius (FC)?");

        process.stdin.once("data", function(opcao) {
            opcao = opcao.toString().trim().toLowerCase();
            
            switch (opcao) {
                case 'cf':
                    celsius = temperatura;
                    fahrenheit = (celsius * 1.8) + 32;
                    console.log("A temperatura está: " + fahrenheit.toFixed(2) + " °F");
                    break;
                
                case 'fc':
                    fahrenheit = temperatura;
                    celsius = (fahrenheit - 32) * 5 / 9;
                    console.log("A temperatura está: " + celsius.toFixed(2) + " °C");
                    break;
                
                default:
                    console.log("Opção inválida. Use 'CF' para Celsius para Fahrenheit ou 'FC' para Fahrenheit para Celsius.");
            }
            process.exit();
        });
    } else {
        console.log("Insira um número válido.");
    }
});

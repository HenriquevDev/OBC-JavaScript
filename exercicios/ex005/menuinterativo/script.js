let opcao = ""

do {
    opcao = prompt("Escolha uma das 5 opções:" +
        "\n 1. Gatos" +
        "\n 2. Cachorros" +
        "\n 3. Capivaras" +
        "\n 4. Papagaios" +
        "\n 5. Encerrar Programa")

    switch (opcao) {
        case "1":
            alert("Você escolheu os Gatos")
            break
        case "2":
            alert("Você escolheu os Cachorros")
            break
        case "3":
            alert("Você escolheu as Capivaras")
            break
        case "4":
            alert("Você escolheu os Papagaios")
            break
        case "5":
            alert("Encerrando Programa...")
            break
        default:
            alert("Opção Invalida, escolha uma opção valida")
            break
    }
} while (opcao !== "5")

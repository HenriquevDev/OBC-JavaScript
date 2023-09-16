let quantia = parseFloat(prompt("Qual é a quantia de dinheiro dísponivel?"))
let actions = ""


do {

    actions = prompt("A quantia de dinheiro disponiveç é de: R$" + quantia + " . Que ação deseja tomar? " +
        "\n1. Adicionar Dinheiro" +
        "\n2. Retirar Dinheiro Dinheiro" +
        "\n3. Finalizar Programa")

    switch (actions) {
        case "1":
            quantia += parseFloat(prompt("Qual a quantia que deseja adicionar?"))
       
            break
        case "2":
            quantia -= parseFloat(prompt("Qual a quantia que deseja retirar?"))
           
            break
        case "3":
            alert("Programa Encerrando...")
            break
        default:
            alert("Digite uma opção Válida!!!")
            break

    }

} while (actions !== "3")


let fila = []
let acoes = ""


do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    acoes = prompt("Ordem de Pacientes: \n" + pacientes +
        "\nAções: \n1. Adicionar Pacientes / 2. Consultar Paciente / 3. Sair")
        
    switch (acoes) {
        case "1":
            fila.push(prompt("Digite o Nome do Paciente"))
            break
        case "2":
            let consultado = fila.shift()
            if (!consultado) {
                alert("Não há pacientes na fila")
            } else {
                alert(consultado + " Foi Removido da fila!")
            }
            break
        case "3":
            alert("Encerrando Programa")
            break
        default:
            alert("Opção Inválida")
            break
    }
} while (acoes !== "3")



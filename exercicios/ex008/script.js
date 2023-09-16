const imoveis = []
let opcao = ""

do {
    opcao = prompt("Bem-Vindo ao cadastro de imóveis! \n" +
        "Total de Imóveis: " + imoveis.length +
        "\n\n Esolha uma das opções:\n1. Novo Imóvel\n2. Lista de imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do Proprietário do Imóvel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel? \n" +
                "\nProprietario: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem

            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel Salvo com Sucesso")
            } else {
                alert("Voltando ao Menu...")
            }
            break


        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel " + (i + 1) + 
                    "\nProprietario: " + imoveis[i].proprietario+
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui Garagem? " + imoveis[i].garagem 
                )
            }
            break
        case "3":
            alert("Encerrando Programa...")
            break
        default:
            alert("Opção Invalida!!")
    }


} while (opcao !== "3")
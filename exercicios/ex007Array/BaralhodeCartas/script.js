let opcoes = ""
let baralho = []

do{
    opcoes = prompt("Quantidade de Cartas Atualmente no baralho: " + baralho.length +
    "\n Ações: \n1.Adicionar Carta / 2.Puxar uma carta / 3.Encerrar o programa")

    switch(opcoes){
        case "1":
            baralho.push(prompt("Qual o nome da carta? :"))
            break
        case "2":
            const puxar = baralho.shift()
            if(!puxar){
                alert("Não a carta para puxar!!")
            } else {
                alert("A carta puxada foi: " + puxar)
            }
            break
        case "3":
            alert("Encerrando o Programa...")
            break
        default:
            alert("Opção Invalida")
            break
    }
} while( opcoes !== "3")
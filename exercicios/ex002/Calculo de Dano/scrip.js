const atacante = prompt("Qual é o nome do personagem atacante?")
const powerAtack = parseFloat(prompt("Qual o seu poder de ataque?"))

const defenser = prompt("Qual o nome do personagem defenser?")
let lifePoints = parseFloat(prompt("Quantos pontos de VIDA ele possui?"))
const defensePower = parseFloat(prompt("Quantos pontos de DEFESA ele possui?"))
const shield = prompt("Ele possui escudo? (sim/não)")

let danoCausado = 0 

if (powerAtack > defensePower && shield === "não") {
    danoCausado = powerAtack - defensePower
} else if (powerAtack > defensePower && shield === "sim"){
    danoCausado = (powerAtack - defensePower) / 2
} 

lifePoints -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defenser)
alert(
    atacante + "\nPoder de ataque: " + powerAtack + "\n\n" +
    defenser + "\nPontos de vida: " + lifePoints +
    "\nPoder de Defesa: " + defensePower + "\nPossui escudo: " + shield
)


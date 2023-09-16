const nome = window.prompt("Seu Nome: ")
const sobrenome = window.prompt("Seu Sobrenome: ")
const estudo = window.prompt("Seu campo de estudo: ")
const nascimento = window.prompt("Seu ANO de nascimento")
const idade = 2023 - nascimento

window.alert(`Bem vindo ${nome} ${sobrenome} com ${idade} anos, estudante de ${estudo}`)

console.log(`Bem vindo ${nome} ${sobrenome} com ${idade} anos, estudante de ${estudo}`)
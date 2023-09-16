const entrada1 = prompt("Digite o primeiro Número: ")
const entrada2 = prompt("Digite o segundo Número: ")

const n1 = parseFloat(entrada1)
const n2 = parseFloat(entrada2)

const soma = n1 + n2
const sub = n1 - n2
const mult = n1 * n2
const div = n1 / n2


window.alert("A soma dos dois números é: " + soma +
"\n A subtração: " + sub + 
"\n A multiplicação: " + mult +
"\n A divisão: " + div)
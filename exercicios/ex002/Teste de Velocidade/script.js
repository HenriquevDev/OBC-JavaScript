const car1 = prompt("Qual o Nome do Primeiro carro?")
const car2 = prompt("Qual o Nome do Segundo Carro?")

const vel1 = prompt("A quantos Km/h o primeiro carro esta:")
const vel2 = prompt("Agora a velocidade do segundo carro:")


    if(vel1 > vel2){
        alert("O carro " + car1 + " está mais rapido que o carro "+car2+"!!!")
    } else if (vel1 == vel2){
        alert("Ambos os carros "+car1+" e "+car2+" estão na mesma velocidade!")
    } else{
        alert("O carro " + car2 + " está mais rapido que o carro "+car1+"!!!")
    }
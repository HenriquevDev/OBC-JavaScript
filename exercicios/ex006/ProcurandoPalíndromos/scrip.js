const world = prompt("Escreva uma palavra para verificar se é um palindromo:")
let inverseWorld = ""

for (let i = world.length - 1; i >= 0; i--){
    inverseWorld += world[i]
}

if (world === inverseWorld){
    alert(world + " É um palíndromo!")
}else{
    alert(
        world + " não é um palíndromo! \n\n" +
        world + " !== " + inverseWorld
    )
}


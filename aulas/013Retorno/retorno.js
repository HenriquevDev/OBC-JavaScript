function calculaMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calculaMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco){
    const produto = {
        nome, // nome: nome, 
        preco, // preco: preco,
        estoque: 1
    }
    return produto
}


console.log(criarProduto("Notebook Intel Core i3 8GB", 2500))

function areaRetangular(base, altura){
    return base * altura
    
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

// console.log(areaRetangular(3, 5))

// console.log(areaQuadrada(9))

//uma função so pode retornar uma vez
function ola(){
    let texto = "..."
    texto = "Ola, Mundo."
    return texto
    console.log(texto)
}

console.log(ola())

function maiorIdade(idade){
    if ( idade >= 18){
        return "maior de idade"
    } else {
        return "menor de idade"
    }
}

console.log(maiorIdade(22))
console.log(maiorIdade(12))
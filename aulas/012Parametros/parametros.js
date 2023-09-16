function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
}

// NaN = Not A Number
// dobro(5)
// dobro(7)

// dobro()

function dizerOla(nome = "mundo"){
    alert ("Ola, " + nome + "!")
}

// dizerOla("Henrique")
// dizerOla()

function soma(a, b){
    alert("resultado da soma é : " + (a + b))
}

// soma(1,1)
// a ordem dos parametros é extremamente crucial

function criarUsuario(nome, email, senha, tipo){
    const usuario = {
        nome, //mesmo que nome: nome,
        email,
        senha,
        tipo
    }

    console.log(usuario)
}


function novoUsuario(nome, email , senha, tipo = "admin" ){ 
    //parametros com valor padrão devem ficar no final
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
    //...
}
function objetoComoParametro(usuario){
    usuario.nome
   usuario.email
}
muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario)
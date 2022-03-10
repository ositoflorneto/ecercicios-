// function chamaNome(){
//     // return "Osito"
//     nome = "Flor"
// }

// let nome = "Osito"

// console.log(`O nome antes é ${nome}`)
// chamaNome()
// console.log(`O nome depois é ${nome}`)

// import fetch from 'node-fetch'


// fetch(`https://viacep.com.br/ws/${cep}/json/`).then(function(res){
//     console.log(res)
// })


// (async () => {
//     let cep = '54280380'
// })();

// async function pegarCep(cep){
//     const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//     const data = await response.json();
//     console.log(data) 
// }

// pegarCep(54280380)

// function soma(n1, n2, fndividir){
//     let soma = n1 + n2 
//     let valor =fndividir(soma, 8)
//     return pessoaReceber('osito', valor)
// }

// function dividir(n1, n2){
//     return n1 / n2
// }

// function pessoaReceber(pessoa, valor){
//     return `pessoa é ${pessoa} vai receber: ${valor}`
// }

// console.log(soma(5, 8, dividir))


function somar(n1, n2){
    return n1 + n2
}

function subtrair(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}


const calcular = {
    adicao: somar,
    subtracao: subtrair,
    multiplicacao: multiplicar,
    divisao: dividir
}

console.log(calcular.adicao(50, 50))
// declaração de função (Function hoisting)

falaOi() // o próprio motor do javascript permite criar uma função em baixo e chamar ela em cima, isso ocorre pq na hora da execução a função é levada para o topo

function falaOi() {
    console.log('oi');
}

// first-class object
// function expression

const souUmDado = function() {
    console.log('sou um dado')
}

souUmDado() // uma variável pode receber uma função, e então ser chamada como tal, ou seja, ela passou a ser uma função

function executaFuncao(funcao) {
    console.log('essa função executa outra função')
    funcao()
}

executaFuncao(souUmDado)
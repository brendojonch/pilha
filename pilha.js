var elementos = [];
var topo = -1; //todo vetor começa na posição zero usando numero negativo significa que estou fora da estrutura//

const MAX = 10;

function push(num) {
    if (topo < MAX) {
        topo = topo + 1;
        elementos[topo] = num;
    }
    else {
        console.log("Pilha esta cheia");
    }
}

function estaVazia(){
     return topo == -1;
}

function pop() {
    if (topo != -1) {
        let num = elementos[topo];
        topo = topo - 1;
        return num;

    }
    else {
        console.log("Pilha está vazia!");
    }
}


///----- PARTE DO CODIGO QUE USA PILHA ---///

var numeroDecimal = 10;
var resto;

while (numeroDecimal != 0){
    resto = parseInt(numeroDecimal) % 2; //parseInt ira forçar a permanencia do numero inteiro//
    push(resto);
    numeroDecimal = parseInt(numeroDecimal) / 2;      
}

while (!estaVazia());{
    console.log(pop());

}
// 2 -> Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos dois valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(nsequence){

// inicializando as variáveis: a sequência definida por fibonacci inicia-se com 1 e 1, mas por convenção, pode-se definir F(0)= 0, isto é, que a sequência começa em 0 e 1.
    let fib = [nsequence]; 
    fib[0] = 0;
    fib[1] = 1;

// calculando a sequência de fibonacci e armazenando os elementos em um array:
    for(let i = 2; i < nsequence; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

// retornando o resultado da sequência no console
    console.log(fib);

// verificando através de uma condição lógica se o número que foi informado para sequência de fibonacci pertence a mesma. obtemos o resultado com ajuda do método find
    if (fib.find(i => i === nsequence)) {
        return 'o número informado pertence a sequência.';
    } else  {
        return 'o número informado não pertence a sequência.';
    }
}

console.log(fibonacci(21));
console.log(fibonacci(14));
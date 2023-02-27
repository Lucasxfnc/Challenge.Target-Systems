// 5 -> Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// A -> Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// B -> Evite usar funções prontas, como, por exemplo, reverse;

function comp (fn1, fn2, fn3, fn4, vlr) {
    return fn3(fn2(fn1(fn4(vlr))));
}
function gritar (txt) {
    return txt.toUpperCase(); 
    // retorna o valor da string original convertido em letras maiúsculas.
}
function enfatizar (txt) {
    return `${txt}!!!!!!!`;
}
function tornarLento (txt) {
    return txt.split('').join(' ');
    // divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

    // junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
}
function reverseStr(txt) {
    return (txt === '') ? '' : reverseStr(txt.substr(1)) + txt.charAt(0);
//    caso base; recebe o novo txt; quando a condição é satisfeita retorna o texto invertido realizando diversas chamadas aninhadas;

// outra opção: laço for decrementado
let newString = ''; // inicia uma string vazia para receber a nova invertida
    for (let i = txt.length - 1; i >= 0; i--) {
        newString += txt[i];
    }
    return newString;
// o início do for será o último caractere do txt
// enquanto a condição for satisfeita
// o laço continuará decrementamos o indice após cada iteração
}

let resultx = comp(gritar, enfatizar, tornarLento, reverseStr, 'sinta medo da void');
console.log(resultx);
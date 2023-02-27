// 4 -> Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora:

// inicializando as variáveis: faturamento mensal, detalhado por estado, de uma distribuidora
var sp = 67.83643;
var rj = 36.67866;
var mg = 29.22988;
var es = 27.16548;
var out = 19.84953;

// calculando o faturamento mensal total da distribuidora:
function fatMensal(){
    return sp + rj + mg + es + out;
}

// calculando o percentual relativo a cada estado:
function percEstado(aux){
    return (aux / fatMensal()) * 100;
}

// retornando no console o resultado geral:
console.log(`O faturamento mensal total da distribuidora foi R$${fatMensal().toFixed(3)}`);
console.log(`O percentual de faturamento do estado de SP é: ${percEstado(sp).toFixed(1)}%`);
console.log(`O percentual de faturamento do estado do RJ é: ${percEstado(rj).toFixed(1)}%`);
console.log(`O percentual de faturamento do estado de MG é: ${percEstado(mg).toFixed(1)}%`);
console.log(`O percentual de faturamento do estado do ES é: ${percEstado(es).toFixed(1)}%`);
console.log(`O percentual de faturamento do estado de OUT é: ${percEstado(out).toFixed(1)}%`);

// {    class regioes {
//         // atributos:
//         constructor(vlrSP, vlrRJ, vlrMG, vlrES, vlrOUT){
//             this.sp = vlrSP;
//             this.rj = vlrRJ;
//             this.mg = vlrMG;
//             this.es = vlrES;
//             this.outros = vlrOUT;
//         }
    
//         // métodos:
//         // calculando o faturamento mensal total da distribuidora:
//         fatMensal(){
//             return this.sp + this.rj + this.mg + this.es + this.outros;
//         }
//         // calculando o percentual relativo a cada região:
//         percRegiao(aux){
//             return (aux / this.fatMensal()) * 100;
//         }
//     };
//                               sp         rj       mg        es      outros
//     const dist = new regioes(67.83643, 36.67866, 29.22988, 27.16548, 19.84953);
    
//     console.log(dist.percRegiao(67.83643).toFixed(1)); // sp
//     console.log(dist.percRegiao(36.67866).toFixed(1)); // rj
//     console.log(dist.percRegiao(29.22988).toFixed(1)); // mg
//     console.log(dist.percRegiao(27.16548).toFixed(1)); // es
//     console.log(dist.percRegiao(19.84953).toFixed(1)); // outros
// }
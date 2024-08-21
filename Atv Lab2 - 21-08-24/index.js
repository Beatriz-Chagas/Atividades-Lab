const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log('Server ativo')
})

app.get('/regraDeTres', function(req, res){
    function regraDeTres(n1, n2, n3) {
    
        if (n1 === 0) {
            throw new Error("Valor1 não pode ser 0.");
        }
    
        return (n2 * n3) / n1;
    }
    
    const x = regraDeTres(10, 20, 30);
    console.log(`O resultado é: ${x}`); 
    
    module.exports = regraDeTres
})
app.get('/maiorValor', function(req, res){
    

function maiorNumeroEntreCinco(a, b, c, d, e) {
    return Math.max(a, b, c, d, e);
}

const maior = maiorNumeroEntreCinco(10, 25, 7, 42, 18);
console.log(`O maior número é: ${maior}`); 
})

app.get('/menorValor', function(req, res){
    function menorNumeroEntreCinco(a, b, c, d, e) {
        return Math.min(a, b, c, d, e);
    }
    
    const menor = menorNumeroEntreCinco(10, 25, 7, 42, 18);
    console.log(`O menor número é: ${menor}`); 
    
})
 ;




/* 
Tentativa de representação lógica

regra de três
var n1 = 30;
var n2 = 10;
var n3 = 15;

var x = (n2 * n3) / n1;

console.log("Valor de x:" + x);

Número maior entre cinco valores
var a, b, c, d, e

var maior 

if (a > b, c, d, e) {
    maior = a
} else {
    if (b > a, c, d, e) {
        maior = b
    } else {
        if (c > a, b, d, e) {
            maior = c
        } else {
            if (d > a, b, c, e) {
                maior = d
            } else {
                maior = d
            }
        }
    }
}

Número menor entre cinco valores

var a, b, c, d, e

var menor 

if (a < b, c, d, e) {
    menor = a
} else {
    if (b < a, c, d, e) {
        menor = b
    } else {
        if (c < a, b, d, e) {
            menor = c
        } else {
            if (d < a, b, c, e) {
                menor = d
            } else {
                menor = d
            }
        }
    }
} */
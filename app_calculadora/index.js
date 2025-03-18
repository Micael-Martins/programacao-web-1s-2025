const calc = require('./calculadora');

/*console.log(calc.Somar(2,3))
console.log(calc.Subtrair(2,3))
console.log(calc.Multiplicar(2,3))
console.log(calc.Dividir(2,3))*/

const express = require('express');

const app = express()

app.get('/', (req, res) =>{
    res.send('Olá, mundo!')
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});


// Baixar npm na máquina, espress também
const express = require('express');
const calculadora = require('./util/calculadora');
// O que está acima apenas importa o express já presente na máquina e o arquivo calculadora dentro desta pasta

const app = express();
const PORT = 8080;
// Esta definindo criando uma função express e informando a porta a qual esta função rodará

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params; // Provavelmente define onde o imput será guardado
    const resultado = calculadora.Somar(Number(a), Number(b)); // Armazena em resultado o chamado da função somar presente em calculadora
    res.send(`Resultado da soma: ${resultado}`); // Imprime na página o resultado da operação.
});

/* 
No bloco de código a cima, estamos vendo várias coisas novas.
Em primeira mão, temos o app.get. Ao meu ver, ele define o que o 
usuário deve digitar para que o bloco funcione. Somar é a função, :a e :b são os parametros.
Depois disso, criamos uma função que recebe os parametros req e res.
Creio eu que req seja uma abreviação para request e res é de response.
O resto da minha suposição do que cada coisa faz está comentado acima.
*/

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params; 
    const resultado = calculadora.Subtrair(Number(a), Number(b)); 
    res.send(`Resultado da subtração: ${resultado}`); 
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params; 
    const resultado = calculadora.Multiplicar(Number(a), Number(b)); 
    res.send(`Resultado da multiplicação: ${resultado}`); 
});

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params; 
    if (b == 0){
        return res.send('É impossível dividir por 0');
    }
    const resultado = calculadora.Dividir(Number(a), Number(b));
    res.send(`Resultado da divisão: ${resultado}`); 
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

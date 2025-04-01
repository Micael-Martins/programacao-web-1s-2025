const express = require('express');
const app = express();
const PORT = 8080;

let estoque = [];

// Após criarmos um estoque, o código abaixo lista os produtos desejados nele e os armazena num array
app.get('/adicionar/:id/:nome/:qtd', (req, res) =>
    {const{id, nome, qtd} = req.params;
    estoque.push({id: parseInt(id), nome, qtd: parseInt(qtd)})
    res.send(`Produto ${nome} adicionado com sucesso!`)
});

//aqui foi criado um tipo de função para o site que vai imprimir todo o estoque adicionado pelo usuário
app.get('/listar', (req, res) => {

    if(estoque.length == 0){
        res.send('O estoque está vazio!')
    }
    
    else{
        res.json(estoque);
    }
    
});

//No código abaixo foi criado um get que remove um id da lista do estoque. Ainda não sei o que a linha 22 faz.
app.get('/remover/:id', (req, res) =>{
    const{id} = req.params;
    estoque = estoque.filter(produto => produto.id !== parseInt(id));
    res.send(`O produto com o ID ${id} foi removido!`)
});


app.get('/editar/:id/:qtd', (req, res) => {
    const {id, qtd} = req.params;
    produto = estoque.find(produto => produto.id === parseInt(id))

    if(produto){
        produto.qtd = parseInt(qtd)
        res.send(`Quantidade do produto ${produto.nome} atualizada para ${qtd}!`);
    } else {
        res.send('Produto não encontrado!');
    }
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta http://localhost:${PORT}`);
});

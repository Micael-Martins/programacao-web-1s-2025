const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 8080;


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.post('/agendar', (req, res) => {
  const dados = req.body;
  const filePath = path.join(__dirname, 'dados.json');

  let agendamentos = [];


  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (fileContent) {
      agendamentos = JSON.parse(fileContent);
    }
  }

  agendamentos.push(dados);


  fs.writeFileSync(filePath, JSON.stringify(agendamentos, null, 2));

  console.log('Agendamento salvo com sucesso.');
  res.send('Dados salvos com sucesso!');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
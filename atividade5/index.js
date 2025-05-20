const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 8080;


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.post('/agendar', (req, res) => {
  const {
    nome, sobrenome, cpf, nascimento,
    telefone, cep, endereco,
    clinica, especialidade, agendamento, hora
  } = req.body;

  // Validação
  if (!nome || !cpf || !nascimento || !clinica || !especialidade || !agendamento || !hora) {
    return res.status(400).send('Dados incompletos.');
  }

  console.log('Dados recebidos:', req.body); // ← Aqui mostra no terminal

  const filePath = path.join(__dirname, 'dados.json');
  let agendamentos = [];

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (fileContent) {
      agendamentos = JSON.parse(fileContent);
    }
  }

  agendamentos.push(req.body);
  fs.writeFileSync(filePath, JSON.stringify(agendamentos, null, 2));

  console.log('Agendamento salvo com sucesso.');
  res.redirect('/agendar_consulta');
});

app.get('/agendar_consulta', (req, res) => {
  const filePath = path.join(__dirname, 'dados.json');
  if (!fs.existsSync(filePath)) {
    return res.send('<h1>Nenhum agendamento encontrado.</h1>');
  }
  const fileContent = fs.readFileSync(filePath, 'utf8');
  let agendamentos = [];
  if (fileContent) {
    agendamentos = JSON.parse(fileContent);
  }
  let html = '<h1>Agendamentos</h1><ul>';
  agendamentos.forEach((item) => {
    html += `<li>${item.nome} ${item.sobrenome} - CPF: ${item.cpf} - Clínica: ${item.clinica} - Especialidade: ${item.especialidade} - Data: ${item.agendamento} - Hora: ${item.hora}</li>`;
  });
  html += '</ul>';
  res.send(html);
});


app.listen(PORT, () => {
  console.log(`Servidor index.js rodando em http://localhost:${PORT}`);
});
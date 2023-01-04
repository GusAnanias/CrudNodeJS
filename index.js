// criamos uma const para adicionar o express a esse index.js 
const express = require('express');
// criamos uma const server que vai armazenar a função express;
const server = express();

server.use(express.json());

// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

const cursos = ['Node JS', 'JavaScript', 'React Native'];

server.get('/cursos', (req, res)=> {
    return res.json(cursos);
});

// localhost:3000/curso
//res represente os dados da nossa aplicação e o res representa as informações para retornar uma informação para o front-end
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    // para testar isso no cmd usar um: node index.js
    //return res.send("Hello World");
    // OU
    return res.json(cursos[index]);
});
//Criando um novo curso
server.post('/cursos', (req, res)=> {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', (req, res)=>{
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

//Excluindo algum curso //Não usaremos o body
server.delete('/cursos/:index', (req, res)=>{
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json(cursos);
})

//server vai ouvir a porta 3000.
server.listen(3000);

//CRUD em NODEJS
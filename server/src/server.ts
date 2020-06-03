import express from 'express';

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema (/users)

// GET:    Buscar uma ou mais informações do back-end
// POST:   Criar uma nova informação no back-end
// PUT:    Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na propria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtro, paginação...
// Request Body: Parâmetros para criação/atualização de informações

const users = [
  'Tiago', // 0
  'Diego', // 1
  'Cleiton', // 2
  'Daniel' // 3
]

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post('/users', (request, response) => {
  const data = request.body;

  console.log(data);
  
  const user = {
    name: data.name,
    email: data.email,
  };

  return response.json(user);
});

app.listen(3333);
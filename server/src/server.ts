import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);

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

// Query Builder = Knex
// SELECT * FROM users WHERE name = 'Tiago'
// knex.('users').where('name', 'Tiago').select('*)

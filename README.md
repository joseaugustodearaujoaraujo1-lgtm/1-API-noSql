# 👥 API de usuários com MongoDB (1)

> Primeiro projeto full stack com banco **NoSQL**: API REST de usuários com **Express + Prisma + MongoDB** e telas de cadastro e login em **Next.js**.

![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)

## O que tem aqui

- **`backend/`**: API em Express com Prisma conectado ao MongoDB.
- **`front-end/`**: Next.js (App Router) com as telas `TelaCadastro`, `TelaLogin` e `entrou`, consumindo a API com Axios.

Modelo `User` (`backend/prisma/schema.prisma`): `id`, `email` (único), `name`, `senha`.

## Rotas da API (porta 3001)

| Método | Rota | Função |
|---|---|---|
| `POST` | `/usuario` | cria usuário |
| `GET` | `/usuario` | lista usuários |
| `PUT` | `/usuario/:id` | substitui os dados |
| `PATCH` | `/usuario/:email` | atualiza campos |
| `DELETE` | `/usuario/:email` | remove |

## Como rodar

```bash
git clone https://github.com/joseaugustodearaujoaraujo1-lgtm/1-API-noSql.git
cd 1-API-noSql/backend
npm install
# crie .env com DATABASE_URL apontando para o seu MongoDB
npx prisma generate
node server.js

# em outro terminal
cd ../front-end
npm install
npm run dev
```

## Limitações (é um projeto de estudo)

- A senha é gravada **sem hash**. Em produção, use `bcrypt` (veja [Autenticacao-JWT-backend-SQL](https://github.com/joseaugustodearaujoaraujo1-lgtm/Autenticacao-JWT-backend-SQL), que já faz isso).
- Sem autenticação nas rotas e sem testes.

Continuação: [2-API-noSql](https://github.com/joseaugustodearaujoaraujo1-lgtm/2-API-noSql).

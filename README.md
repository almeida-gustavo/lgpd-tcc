# lgpd

Projeto TCC - Backend

_Para rodar o projeto você ter docker instalado e node > 16_

- Para criar o container docker você deve rodar o seguinte comando:
  - `docker run --name postgres -e POSTGRES_USER=gustavomelo -e POSTGRES_PASSWORD="localhost" -e POSTGRES_DB=heroes -p 5432:5432 -d postgres`
- Com o comando comando acima você vai ter criado o container docker que vai rodar o banco postgres.
  - Caso o container se encerre, basta rodar `docker run localhost`
- Com o container rodando você vai abrir o seu software cliente SQL como um Dbeaver por exemplo e vai conectar seu banco nele. Apos estar conectado você vai precisar so criar um banco com o nome "lgpd" ou qualquer outro nome que queira colocar

* No projeto você deve colocar as seguintes variáveis de ambiente

```# database
DB_HOST=localhost
DB_USER=postgres
DB_PASS=localhost
DB_NAME=lgpd
DB_PORT=5432

# api
API_PORT=3000

#token
APP_SECRET=teste
```

- Para rodar o projeto

  - `npm init ou yarn`
  - `npx sequelize db:migrate` para rodar as migrações no banco de dados
  - `npx sequelize db:seed:all` para rodar as seeds e abastecer o banco de dados

- O projeto estara rodando na porta 3000

## ROTAS

- **GET** http://localhost:3000/answer/:idDaEmpreesa - Listar as perguntas com as Respostas (ROTA PRECISA DE TOKEN. Colocar o header: authorization: Bearer token)
- **GET** http://localhost:3000/address/states - Listar os estados
- **GET** http://localhost:3000/states/:idDoEstado/cities - Listar as cidades no estado especificado
- **GET** http://localhost:3000/user/:idDoUsuario - Listar informacoes do usuario
- **POST** http://localhost:3000/user - Criar usuario com corpo abaixo

```
{
	"name": "seu nome",
	"email": "email@email.com",
	"password": "1234",
	"cpf": "123.456.789-99",
	"company": {
		"name": "teste ltda",
		"cnpj": "112345676543",
		"address": {
			"street": "teste",
			"zipCode": "123456",
			"neighborhood": "teste",
			"numberHouse": "120",
			"complemento": "bloco bloco",
			"referencePoint": "123",
			"cityId": 50
		}
	}
}
```

- **POST** http://localhost:3000/answer/:idDaEmpreesa - Cria resposta para as perguntas (ROTA PRECISA DE TOKEN. Colocar o header: authorization: Bearer token)

```
{
  "responses": [
		{"answer": "Sim", "questionId": 1},
		{"answer": "Não", "questionId": 2},
		{"answer": "Talvez", "questionId": 3},
		{"answer": "Sim", "questionId": 4}
	]
}
```

- **POST** http://localhost:3000/login - Gera o token para usar nas rotas

```
{
  "email" : "see@email.com",
	"password": "1234"
}
```

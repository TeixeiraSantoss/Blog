# Blog Manager Application

## Sobre o Projeto

Este projeto é uma aplicação web de gerenciamento de um blog, permitindo que os usuários possam criar, editar, excluir e visualizar postagens, além de adicionar comentários em cada uma delas. Ele foi desenvolvido utilizando uma combinação de tecnologias modernas para o backend e frontend, fornecendo uma interface amigável e funcionalidades robustas para a manipulação de conteúdo.

### Tecnologias Utilizadas

#### Backend

- **C#**: Linguagem de programação principal para o desenvolvimento da API.
- **ASP.NET Core**: Framework utilizado para construir a API RESTful, proporcionando rotas para as funcionalidades do blog.
- **Entity Framework Core**: ORM utilizado para a comunicação com o banco de dados, simplificando a manipulação de dados.
- **SQLite**: Banco de dados utilizado para armazenar as informações das postagens, comentários e usuários.
- **Migrations do Entity Framework**: Usado para gerenciar e aplicar alterações no banco de dados.

#### Frontend

- **Angular**: Framework JavaScript usado para o desenvolvimento da interface web, possibilitando uma experiência interativa e reativa.
- **TypeScript**: Linguagem utilizada no frontend para adicionar tipagem estática e melhorar o desenvolvimento de componentes do Angular.
- **Bootstrap**: Framework CSS utilizado para estilização da interface e para garantir que ela seja responsiva.
- **NgModel (Angular Forms)**: Utilizado para o binding de dados nos formulários da aplicação.

### Funcionalidades

1. **Cadastro de Postagens**: Permite criar novas postagens no blog.
2. **Listagem de Postagens**: Exibe uma lista de todas as postagens disponíveis no blog.
3. **Edição de Postagens**: Os usuários podem alterar o conteúdo de suas postagens.
4. **Exclusão de Postagens**: Remove postagens do blog.
5. **Comentários**: Funcionalidade para adicionar, listar e filtrar comentários nas postagens, em um estilo semelhante ao de redes sociais.

## Como Rodar o Projeto?

### Passo 1: Clonar o Repositório

Abra o terminal ou prompt de comando.

Navegue até o diretório onde deseja clonar o repositório.

Use o comando para clonar o repositório:

```bash
git clone https://github.com/TeixeiraSantoss/Blog
```

### Passo 2: Configurar o Backend

1. Navegue até o diretório do backend:

```bash
cd ./Blog/Back
```

2. Restaure os pacotes NuGet:

```bash
dotnet restore
```

3. Aplique as migrações para configurar o banco de dados:

```bash
dotnet ef database update
```

4. Rode o backend:

```bash
dotnet run
```

(O backend estará disponível em https://localhost:5001 por padrão.)

### Passo 3: Configurar o Frontend

1. Abra um novo terminal e navegue até o diretório do frontend:

```bash
cd ./Blog/Front
```

2. Instale as dependências do Angular:

```bash
npm install
```

3. Rode o frontend:

```bash
ng serve -o
```

(O frontend estará disponível em http://localhost:4200.)

### Passo 4: Acessar a Aplicação

Abra o navegador e acesse http://localhost:4200.

Realize o login com as credenciais fornecidas para acessar as funcionalidades do blog.

### Passo 5: Desligar a Aplicação

1. Para parar o frontend: No terminal onde está rodando o Angular, pressione **Ctrl + C**.
2. Para parar o backend: No terminal onde está rodando o backend, pressione **Ctrl + C**.

Seguindo estes passos, você terá o projeto rodando localmente e poderá interagir com as funcionalidades do blog.

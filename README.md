# Agenda de Contatos

Aplicação simples de gerenciamento de contatos com um backend construído em Node.js, Express e MySQL, e um frontend interativo utilizando Vue.js 3 e Vuetify 3 (servido via CDN em um único arquivo HTML).

## Funcionalidades

*   Listagem de contatos em uma tabela paginada.
*   Adição de novos contatos através de um modal.
*   Edição de contatos existentes através de um modal.
*   Exclusão de contatos com diálogo de confirmação.
*   Validação de dados no formulário:
    *   **Nome:** Obrigatório, mínimo de duas palavras, cada uma com pelo menos 3 caracteres.
    *   **Telefone:** Obrigatório, formato `(xx) xxxxx-xxxx` ou `(xx) xxxx-xxxx`.
*   Máscara de entrada automática para o campo de telefone.
*   Botão "Salvar" do formulário desabilitado enquanto os dados não forem válidos.
*   Destaque visual (fundo azul claro) para linhas da tabela cujo telefone possua DDD (11).
*   Feedback ao usuário através de snackbars para operações bem-sucedidas ou com erro.
*   Indicadores visuais de carregamento durante operações assíncronas (salvar, excluir, carregar tabela).

## Tecnologias Utilizadas

**Backend:**

*   Node.js
*   Express.js
*   MySQL (com driver `mysql2/promise`)
*   `cors` (para lidar com Cross-Origin Resource Sharing)
*   `dotenv` (para gerenciamento de variáveis de ambiente)
*   `morgan` (para logging de requisições HTTP)
*   ES Modules (`import`/`export`)

**Frontend:**

*   HTML5
*   CSS3
*   JavaScript (ES6+)
*   Vue.js 3 (Composition API, via CDN)
*   Vuetify 3 (Biblioteca de componentes UI Material Design, via CDN)
*   vue-imask (Para máscara de input, via CDN)
*   Material Design Icons (mdi/font, via CDN)

## Pré-requisitos

*   Node.js (versão 18 ou superior recomendada)
*   npm (geralmente instalado com o Node.js)
*   Servidor MySQL (instalado, rodando e acessível)
*   Git (opcional, para clonar o repositório)

## Configuração e Execução

### 1. Backend

1.  **Clone o repositório (ou copie os arquivos do backend):**
    ```bash
    git clone <url-do-seu-repositorio>
    cd <pasta-do-backend>
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configure o Banco de Dados MySQL:**
    *   Certifique-se que seu servidor MySQL está rodando.
    *   Crie um banco de dados para a aplicação (o nome padrão esperado é `contatos_db`). Você pode usar um cliente MySQL ou executar:
        ```sql
        CREATE DATABASE contatos_db;
        ```
    *   Conecte-se ao banco de dados recém-criado (`USE contatos_db;`) e crie a tabela `contatos`:
        ```sql
        CREATE TABLE contatos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            telefone VARCHAR(20) NOT NULL,
            -- Opcional: adicionar timestamps
            -- createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            -- updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
        ```
4.  **Configure as Variáveis de Ambiente:**
    *   Crie um arquivo chamado `.env` na raiz do projeto backend.
    *   Adicione as seguintes variáveis, substituindo pelos seus dados de conexão MySQL:
        ```dotenv
        DB_HOST=localhost
        DB_USER=seu_usuario_mysql
        DB_PASSWORD=sua_senha_mysql
        DB_NAME=contatos_db
        # PORT=3000 # Opcional, o padrão no código é 3000
        ```
5.  **Inicie o servidor backend:**
    *   Para desenvolvimento (com recarregamento automático se tiver `nodemon` configurado):
        ```bash
        npm run dev
        ```
    *   Para produção (ou sem nodemon):
        ```bash
        npm start
        # ou diretamente:
        # node server.js
        ```
    *   O servidor deve iniciar e indicar que está escutando na porta 3000 (ou a porta definida no `.env`).

### 2. Frontend

1.  **Localize o Arquivo:** Encontre o arquivo `index.html` (ou o nome que você deu a ele).
2.  **Abra no Navegador:** Abra o arquivo `index.html` diretamente no seu navegador web (Chrome, Firefox, Edge, etc.).
    *   **Não é necessário** nenhum passo de build ou servidor local para o frontend, pois ele utiliza CDNs.
3.  **Verifique a Conexão:** O frontend tentará se conectar à API backend no endereço `http://localhost:3000` (definido na variável `API_URL` dentro do script do HTML). Certifique-se que o backend está rodando neste endereço.

## Uso

Após iniciar o backend e abrir o `index.html` no navegador:

*   A tabela deve carregar os contatos existentes (se houver).
*   Use o botão "+ ADICIONAR" para abrir o modal e cadastrar novos contatos.
*   Clique no ícone de lápis (Editar) ou lixeira (Excluir) em cada linha para modificar ou remover um contato.
*   Observe o feedback visual nos snackbars e os indicadores de carregamento.

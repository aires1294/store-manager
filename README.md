Uma iniciativa concebida por @aires1294, inspirada nas orientações e diretrizes da @Trybe.

# API de Gerenciamento de Vendas - Dropshipping
Este projeto consiste em uma API RESTful para gerenciamento de vendas em um formato de dropshipping, utilizando a arquitetura MSC (Model-Service-Controller) e banco de dados MySQL. Com essa API, é possível criar, visualizar, deletar e atualizar produtos e vendas.

# Instruções de utilização
Recomendo utilizar o Docker para rodar o seu projeto, assim como o Thunder Client para testar as rotas diretamente no VSCode.

# Pré-requisitos
Docker e docker-compose (versão 1.29 ou superior) instalados (caso queira rodar no Docker)
Node.js (versão >=16.0.0) e npm (versão >=7.0.0) instalados (caso queira rodar localmente)

# Instalação e Execução
## Com Docker
Clone este repositório e navegue até a pasta do projeto.
No terminal, execute o comando docker-compose up -d para iniciar os serviços de node e db em containers.
Caso queira executar os comandos do npm dentro do container, utilize o comando docker-compose run node [comando] (ex: docker-compose run node npm test).
Acesse o container do projeto com o comando docker exec -it store_manager bash.
Dentro do container, instale as dependências com o comando npm install.
Execute os comandos disponíveis no package.json (ex: npm test, npm run dev) dentro do container.

## Sem Docker
Clone este repositório e navegue até a pasta do projeto.
No terminal, execute o comando npm install para instalar as dependências.
Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente necessárias.
Execute os comandos disponíveis no package.json (ex: npm test, npm run dev) para executar a aplicação localmente.

# Orientações importantes
Caso utilize o Docker, lembre-se de executar os comandos dentro do container ou configurar as credenciais do git dentro do container.
Verifique se a porta 3000 está sendo utilizada por outro processo. Caso sim, pare o container ou processo em conflito.
A versão do Node.js e NPM recomendada é "node": ">=16.0.0" e "npm": ">=7.0.0", como descrito na chave "engines" no arquivo package.json.

# Autor

Pedro Teixeira Jacobina Aires
LINKEDIN: https://www.linkedin.com/in/pedrotja/
<div>
  <a href="https://www.linkedin.com/in/pedrotja/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</div>

            <i class="devicon-linkedin-plain-wordmark"></i>
          

# Página de Lembretes

Este projeto é uma aplicação de lembretes que permite aos usuários adicionar, organizar, excluir e marcar lembretes como feitos. A interface é simples e intuitiva, facilitando o gerenciamento de tarefas do dia a dia.

## Funcionalidades

- **Adicionar Lembretes**: Crie lembretes personalizados.
- **Categorias de Lembretes**: Associe cada lembrete a uma categoria específica.
- **Excluir Lembretes**: Remova lembretes que não são mais necessários.
- **Marcar como Feito**: Com um duplo clique, marque um lembrete como concluído.

## Tecnologias Utilizadas

- **Angular**: Framework usado para construir a interface.
- **JSON-Server**: Simulação de API para troca de dados.
- **Angular Material**: Biblioteca de UI para componentes e design responsivo.
- **Bootstrap**: Framework CSS para layout responsivo e estilização.
- **TypeScript**: Linguagem principal para a lógica do projeto.
- **HTML5 e CSS3**: Para estruturação e estilo.

## Como Executar a Aplicação

### 1. Clone o Repositório
```bash
git clone <URL-do-repositório>
cd <nome-do-repositório>
### 1. Clone o Repositório
```
### 2. Instale as Dependências
```bash
npm install
```
### 3. Inicie o json-server
```bash
npx json-server --watch db.json
```
### 4. Execute a Aplicação Angular
```bash
ng serve
```
### 5.  Acesse a Aplicação
```bash
http://localhost:4200
```
## Possíveis Melhorias Futuras

- **Integração com uma API Real:**: Substituir o json-server por uma API back-end real (ex: Node.js com Express, ou Laravel) para persistir os dados em um banco de dados.
- **Autenticação de Usuários:** Adicionar uma camada de autenticação para permitir que cada usuário tenha seus próprios lembretes privados.
- **Notificações e Lembretes Automáticos:** Implementar notificações em tempo real para lembretes.
- **Aplicativo Mobile:** Criar uma versão mobile da aplicação usando Ionic ou Flutter para expandir o alcance e usabilidade.

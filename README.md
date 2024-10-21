# LISTA DE TAREFAS - Documentação

Desenvolvido por Matheus Lopes.

Um aplicativo simples da lista de tarefas, onde o usuário pode acompanhar suas tarefas diárias, adicionando tarefas e marcando-as como feitas, além de excluir, editar e visualizar os itens com mais detalhes.

## Tecnologias utilizadas

- ReactJS;
- TypeScript;
- ViteJS;
- CSS Modules;

## Features

Abrir o aplicativo pela primeira vez mostrará uma lista vazia com um campo em branco *"NOVA TAREFA"*, onde você pode digitar sua primeira tarefa. Para começar, digite algo nesse campo.

---

### Depois de adicionar sua primeira tarefa, há 4 ações principais a serem executadas

- **Concluir tarefa:**
   -Clique no ícone de **check verde** para marcar a tarefa como concluída, passando dela de *"A FAZER"* para *"CONCLUÍDAS"*. Clique na **seta verde** para mover a tarefa de volta para *"A FAZER"*.

- **Deletar:**
   -Clique no ícone de **lata de lixo vermelho** para deletar uma tarefa. Essa ação abrirá um modal de confirmação perguntando se você deseja excluir a tarefa, clique no botão de check para confirmar e excluir.
   -Esteja ciente de que essa ação **não pode** ser desfeita e, se você excluir a tarefa errada, deverá adicioná-la novamente usando o campo de *"NOVA TAREFA"*.

- **Ver detalhes:**
   -Clique no ícone de **olho amarelo** para abrir a tarefa, onde você pode ver o texto inteiro do item. Clicar no X no canto superior direito fecha o modal.

- **Editar:**
   -Clique no ícone de **lápis azul** para tornar a tarefa editável. Pressione Enter para salvar o item editado. Você **não pode** editar tarefas quando elas estão no campo de *"CONCLUÍDAS"*.

---

## Instalação e execução

Para instalar e executar o app, siga estes passos:

1. Primeiro, escolha a pasta onde deseja instalá-lo;
2. Depois de escolher uma pasta, abra o terminal e digite os seguintes comandos:

   1. Clone o repositório Git:

      `git clone https://github.com/Ltheus/todo-app.git`

   2. Acesse o diretório da aplicação:

      `cd todo-app`

   3. Instale as dependências do **NodeJS**\*, utilizando o **npm**\*:

      `npm install`

   4. Execute a aplicação utlizando:

      `npm run dev`

3. Após executá-lo, clique no link que aparecerá no terminal (E. g.: "<http://localhost:5173/>").

<sup>\* Caso você não possua o NodeJS instalado, clique [aqui](https://nodejs.org/en/download/current) e instale a versão LTS.</sup>

<sup>\** Caso você não possua o npm instalado, clique [aqui](https://www.npmjs.com/package/npm) e o instale seguindo os passos. </sup>

<sup> \*** Essa aplicação foi desenvolvida com propósito de estudo e **não** é recomendada para uso profissional.</sup>

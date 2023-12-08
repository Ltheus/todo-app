# Documentação da Aplicação - Lista de Tarefas

Desenvolvido por Matheus Giusto Lopes.

A aplicação possui uma interface simples para a construção de uma lista de tarefas, com opções para **adicionar** itens, assim como **concluir, editar e deletá-los**.

## Funcionalidades
Ao acessar pela primeira vez, o usuário verá a lista de tarefas vazia, com a opção de **adicionar** uma tarefa, digitando o título e clicando no botão com um sinal de **"+"** ou a tecla *enter*. Após criar uma tarefa, o usuário terá três opções de interação:
 - ### Concluir a terefa:
    - Clicando no botão **verde** abaixo do título da tarefa, o usuário pode **marcá-la como concluída** (visualmente representada pelo texto verde). Essa ação **desabilita** o botão de **edição** (azul). Clicar no botão novamente **desmarca** a tarefa e **re-habilita** o botão de edição.
 - ### Editar a tarefa:
    - Clicando no botão **azul**, os botões são **desabilitados** e o título do item se torna um campo para o usuário digitar, **editando** a tarefa. O novo texto pode ser salvo clicando no botão de **salvar** (disquete roxo) ou a tecla *enter*.
 - ### Deletar a tarefa:
    - Clicando no botão **vermelho**, o usuário **deleta** a tarefa e o item é **apagado** da lista. 
      - Atenção: essa ação **não** pode ser desfeita e, caso o usuário delete uma tarefa indesejada, deverá adicioná-la novamente pela função de criar tarefa.
    ---
### Importante:
 - A partir da **quarta** tarefa, novos itens serão adicionados, habilitando uma barra de rolagem dentro da interface da aplicação, para que o usuário possa navegar entre suas tarefas.
 - Esta aplicação foi desenvolvida com fins educacionais, portanto **não** é recomendado seu uso no dia-a-dia.
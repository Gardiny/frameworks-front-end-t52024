# frameworks-front-end

Repositório da disciplina Frameworks Front-end

## Atualizando seu repositório local

O código produzido em sala de aula, e compartilhado neste repositório, pode ser atualizado em seu repositório local com o comando:

```console
git pull
```

No entanto, se você fez alterações no seu repositório local, o comando acima pode gerar conflitos. Para evitar lidar com isso, você pode forçar uma atualização com o repositório remoto por meio dos comandos:

```console
git fetch origin
git reset --hard origin/main
```

O primeiro comando recebe as atualizações mais recentes do repositório remoto, e o segundo descarta todas as alterações locais e atualiza com o histórico mais recente do repositório remoto (branch main).

## Dependências do projeto

As dependências do projeto não são compartilhadas no repositório. Para instalar as dependências, a partir da raiz do projeto, no prompt de comandos, digite: `npm install`.

## Sites de referência

- Angular Docs: <https://v17.angular.io/docs>
- TypeScript Documentation: <https://www.typescriptlang.org/docs/>
- MDN Web Docs - Aprendendo desenvolvimento web: <https://developer.mozilla.org/pt-BR/docs/Learn>
- Using Angular in Visual Studio Code: <https://code.visualstudio.com/docs/nodejs/angular-tutorial>

## Ferramentas

- **Visual Studio Code**
  - <https://code.visualstudio.com/Download>
- **Angular Language Service (Extensão do VS Code)**
  - <https://marketplace.visualstudio.com/items?itemName=Angular.ng-template>
- **Git**
  - <https://git-scm.com/downloads>
- **Node.js (e npm)**
  - Versão 20 (LTS).
  - Para verificar a versão do Node.js, no prompt de comandos digite:

    ```console
    node --version
    ```

  - Link para download: <https://nodejs.org/dist/v20.14.0/node-v20.14.0-x64.msi>
- **Angular CLI**
  - Versão 17.
  - Para verificar a versão do Angular CLI, no prompt de comandos digite:

    ```console
    ng version
    ```

  - Tutorial de instalação: <https://v17.angular.io/guide/setup-local>
  - Para instalar o Angular CLI, no prompt de comandos digite:

    ```console
    npm i -g @angular/cli@17.3.8
    ```

## SGCM - Sistema de Gerenciamento de Clínica Médica

A demonstração de uso das ferramentas e tecnologias abordadas na capacitação é baseada em um projeto de exemplo, o SGCM. A documentação básica deste projeto está disponível [em outro repositório](https://github.com/webacademyufac/sgcmdocs) e aborda os seguintes tópicos:

- [Principais funcionalidades](https://github.com/webacademyufac/sgcmdocs#principais-funcionalides)
- [Histórias de usuário](https://github.com/webacademyufac/sgcmdocs#histórias-de-usuário)
- [Diagrama de Classes](https://github.com/webacademyufac/sgcmdocs#diagrama-de-classes)
- [Diagrama Entidade Relacionamento](https://github.com/webacademyufac/sgcmdocs#diagrama-entidade-relacionamento)

## Atividades práticas

> [!IMPORTANT]
>
> - As atividades serão realizadas com o GitHub Classroom e podem ser acessadas pelos links nas descrições das atividades.
> - No primeiro acesso, _**cada aluno deverá selecionar seu nome na lista para vincular sua conta no GitHub**_ e aceitar o convite para a atividade prática.
> - O repositório da atividade prática será criado automaticamente para cada aluno ou grupo (compartilhado entre os membros).
> - O aluno deverá clonar o repositório para seu computador, fazer as modificações necessárias e subir o repositório para o GitHub (`git push`).
> - Não é necessário nenhuma outra ação para submeter a atividade.
> - Atividades em grupo:
>   - Ao acessar o link da atividade, o aluno deverá criar seu grupo ou ingressar no seu respectivo grupo se existir.
>   - O nome do grupo deve seguir o padrão: `Time_X`, onde `X` é o número do grupo.
>   - _**Todos os membros dos grupos devem participar das atividades**_, registrando esta participação por meio da identificação dos commits com seus respectivos usuários no GitHub.

1. [INDIVIDUAL] Modificar o template do `AtendimentoComponent` para exibir o conteúdo da variável `registros` na tabela, semelhante ao que foi feito no `AgendaListComponent`, utilizando a diretiva `NgFor`, e atendendo aos seguintes critérios:

    - O conteúdo deve ser carregado a partir do arquivo `atendimentos.json` (já implementado).
    - O total de registros no rodapé da tabela deve refletir a quantidade de registros exibidos.
    - Caso não haja registros, deve exibir a mensagem "Nenhum registro encontrado" no rodapé da tabela.
    - Quando o status do atendimento for `ATENDIMENTO`, o botão `Iniciar` deve ficar oculto e o botão `Finalizar` deve ser exibido.
    - Quando o status do atendimento for `CHEGADA`, o botão `Finalizar` deve ficar oculto e o botão `Iniciar` deve ser exibido.
    - Link da atividade: <https://classroom.github.com/a/AAVnjEZq>
    - Entrega: 21/06/2024 - 18:00h

    **Solução:** <https://github.com/webacademyufac/frameworks-front-end-t5/commit/3c3324b>

    **Correção:** <https://github.com/webacademyufac/frameworks-front-end-t5/commit/04364a2>

2. [INDIVIDUAL] Substituir o seletor de temas do SGCM por um componente Angular (`SeletorTemaComponent`).

    - O componente já foi criado e está disponível em `src/app/component/seletor-tema`.
    - O componente deve ser renderizado no `AppComponent`, substituindo o seletor de temas atual.
    - O comportamento do seletor atual deve ser mantido, o que inclui:
      - Manter as mesmas opções de temas.
      - Gravar a opção selecionada no `localStorage`.
      - Aplicar o tema armazenado no `localStorage` ao carregar a página (o método `ngOnInit()` pode ser utilizado para isso).
    - A lógica da funcionalidade do seletor de temas deve ser implementada no `seletor-tema.component.ts`, eliminando a necessidade do código atual no `/assets/js/scripts.js`.
    - Link da atividade: <https://classroom.github.com/a/LFGRWIU->
    - Entrega: 24/06/2024 - 18:00h

    **Solução:** <https://github.com/webacademyufac/frameworks-front-end-t5/commit/b64cc5e>

3. [INDIVIDUAL] Alterar o `AtendimentoComponent` para listar os atendimentos utilizando o `AtendimentoService`, de modo similar ao que foi feito no `AgendaListComponent`.

    - Deve filtrar registros com status `CHEGADA` ou `ATENDIMENTO`.
    - Apenas atendimentos do dia devem ser exibidos.
      - Na validação automática a data atual considerada será 01/07/2024.
    - Link da atividade: <https://classroom.github.com/a/oJSDLfZ2>
    - Entrega: 25/06/2024 - 18:00h

    **Solução:** <https://github.com/webacademyufac/frameworks-front-end-t5/commit/bf7c086>

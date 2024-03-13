## Configurações iniciais
### Dentro da pasta 'api' rodamos uma linha de cada vez:
<code>npm init -y</code>

<code>npm install --global yarn</code>

<code>yarn add express nodemon mysql cors</code>

## Erro ao executar o yarn
Caso aconteça este erro:

<code>

    yarn : O arquivo C:\Users\name_my_pc\AppData\Roaming\npm\yarn.ps1 
    não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em https://go.microsoft.com/fwlink/?LinkID=135170...
</code>

Para ajustar temporariamente a política de execução do PowerShell e permitir a execução de scripts, você pode abrir o PowerShell como administrador e executar o seguinte comando:

<code> Set-ExecutionPolicy -Scope Process Bypass</code>

e rodar novamente o script do yarn:

<code>yarn add express nodemon mysql cors</code>

## Na Pasta Frontend
### instalando o react.js
<code> npx create-react-app ./</code>

## instalando as bibliotecas
<code>yarn add styled-components axios react-icons react-to astify</code>

**Estilização no React**
-  styled-components 

**Consumir a API:**
- axios 

**Ícones**
- react-icons 

**Feedback de quando edita, inclui ou exclui o usuário**
- react-to astify


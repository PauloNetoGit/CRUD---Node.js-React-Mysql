## Configurações iniciais
### dentro da pasta 'api' rodamos uma linha de cada vez:
 - npm init -y
 - npm install --global yarn
 - yarn add express nodemon mysql cors

## Erro ao executar o yarn
caso aconteça este erro:
<code>

    yarn : O arquivo C:\Users\name_my_pc\AppData\Roaming\npm\yarn.ps1 
    não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em https://go.microsoft.com/fwlink/?LinkID=135170...
</code>

Para ajustar temporariamente a política de execução do PowerShell e permitir a execução de scripts, você pode abrir o PowerShell como administrador e executar o seguinte comando:
 - Set-ExecutionPolicy -Scope Process Bypass

e rodar novamente o script do yarn:
 - yarn add express nodemon mysql cors
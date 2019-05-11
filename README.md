## Para baixar o projeto, abra um terminal e digite:

git clone https://github.com/plinioaltoe/grupo-seb-app.git

### Acesse a pasta com o seguinte comando:

cd grupo-seb-app

### Instale as dependências com um dos comandos abaixo:

yarn: `yarn`

ou

npm: `npm i`

### Para rodar, digite:

yarn: `yarn start`

ou

npm: `npm start`

### Para rodar os testes, digite:

yarn: `yarn test`

ou

npm: `npm test`

### Resumo do sistema:

Trata-se de um sistema que realiza cadastro de consultas dos usuários em determinados dias e horários.
O login é feito com o username do github, qualquer usuário do github pode logar.
Se logar como médico, o username do github é desconsiderado.
O usuário logado pode ver apenas as suas consultas.
O médico pode ver todas as consultas.
Tanto o usuário, como o médico podem excluir consultas.
O header exibe um contador com a quantidade de consultas marcadas.
O médico não pode criar consultas, assim sendo, o campo para preencher data não é exibido.
Não pode ser realizada uma consulta no mesmo dia e hora, mesmo entre usuários diferentes.

### Conceitos e libs aplicados (Dependências do arquivo package.json):

"axios": "^0.18.0",
"connected-react-router": "^6.4.0",
"flatpickr": "^4.5.7",
"font-awesome": "^4.7.0",
"glamor": "^2.20.40",
"history": "^4.9.0",
"moment": "^2.24.0",
"prop-types": "^15.7.2",
"react": "^16.8.6",
"react-dom": "^16.8.6",
"react-flatpickr": "^3.9.0",
"react-redux": "^6.0.1",
"react-router-dom": "^4.0.0",
"react-scripts": "3.0.1",
"react-toastify": "^5.1.0",
"reactotron-react-js": "^3.0.1",
"reactotron-redux": "^3.1.0",
"reactotron-redux-saga": "^4.2.1",
"redux": "^4.0.1",
"redux-persist": "^5.10.0",
"redux-saga": "^1.0.2",
"styled-components": "^4.1.3"

"enzyme": "^3.9.0",
"enzyme-adapter-react-16": "^1.12.1",
"eslint-config-airbnb": "^17.1.0",
"eslint-plugin-import": "^2.16.0",
"eslint-plugin-jsx-a11y": "^6.2.1",
"eslint-plugin-react": "^7.12.4",
"react-mock-router": "^1.0.15",
"redux-mock-store": "^1.5.3"

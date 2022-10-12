<table>
  <tr>
    <td><img src="https://github.com/rmatos10/natrave/blob/master/web/public/img/logo-fundo-branco.svg" /></td>
  </tr>
</table>

# NaTrave
Projeto de aplicação web desenvolvido no evento Full Stack Challenge da Codar.me

## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Projeto de aplicação desenvolvida durante o evento __Full Stack Challenge__, edição Copa 2022, promovido pela Codar.me.<br />
Foram 5 dias de aula, totalizando um pouco mais de 11 horas de vídeo, desenvolvendo uma API em Node e um Front-end em React.<br />
A aplicação possui uma tela de logins, cadastro de usuário, dashboard e tela de perfil.
Ao entrar no sistema exibe os jogos da Copa do Mundo 2022 realizados no dia informado.<br/>
É possível filtrar os jogos por data. Além disso, permite realizar palpites sobre os resultados dos jogos.<br/>
Todos os palpites são armazenados na nuvem, em um banco de dados do [PlanetScale](https://planetscale.com).<br />
Foram feitas algumas melhorias no Front-end, como por exemplo, adicionado notificações de erro utilizando o plugin __React-Toastify__.<br />
Ao final da última aula, foi explicado como fazer o deploy para a produção na __Vercel__. A aplicação está disponível [aqui](https://natrave-rmatos.vercel.app/).<br />


## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node__ + __Koa__ + __Cors__
  * __Prisma ORM__ para acessar o banco de dados
  * __JWT__ para autenticação JWT (JSON Web Tokens)
* Front-end
  * __React + Vite__
  * __Tailwind CSS__ para estilização.
  * __Formik / Yup__ para validação de formulários
  * __React-Use__ para Hooks
  * __Date-Fns__ para formatar datas.
  * __React-Toastify__ para exibição de notificações de mensagens
  * __Axios__ para acessar a API.
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.<br/>
Renomeie os arquivos _.env.example_ para _.env_ e informe as URLs e o JWT secret.<br/>
```bash
$ git clone https://github.com/rmatos10/natrave
```
* Back-end
```bash
$ cd api
$ npm install
$ npm run start
```
* Front-end
```bash
$ cd ..
$ cd web
$ npm install
$ npm run dev
```

## :camera_flash: Pré-visualização
![](link)

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**rafael.matosr@gmail.com**](mailto:rafael.matosr@gmail.com)

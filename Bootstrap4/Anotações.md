# Bootstrap

### O que é ?

- Bootstrap é o mas popular framework HTML,CSS e JS para desenvolvimento de projetos responsivos, ele é principalmente focado para trazer responsividade a dispositivos móveis na web.
- O Bootstrap torna o desenvolvimento Front-End Web mais rápido e fácil. Ele é feito para desenvolvedores de todos os níveis e se adapta a dispositivos de qualquer forma ou tamanho.

### Instalação:

É possível fazer a utilização do Bootstrap de duas forma, através de outros servidores da web, passando o link

- Via Link

  - Exemplo para instalação do css:

    ```HTML
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>Instalação via CDN</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    </head>
    ```

    &emsp;no caso o link esta sendo passado pelo href.

  - Exemplo para instalação do js:

    ```HTML
    <body>
        <h1>Olá,mundo!</h1>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    </body>
    ```

  &emsp;no caso o link esta sendo passado pela tag script.

Ou passando o arquivo baixado, localizado em um documento local.

- Via Download 
  + Exemplo para a instalação do css:
  ```HTML
   <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"> <title>Instalação via CDN</title> <link href="css/bootstrap.min.css" rel="stylesheet" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous"> </head>
   ```
  + Exemplo para instalação do js:
  ```HTML
    <body>
        <h1>Olá,mundo!</h1>
        <script src="js/bootstrap.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    </body>
  ```
  O mesmo pode ser feito com arquivos [jQuery](README.md), [Popper](README.md) e etc. É importante lembrar que muitos componentes do Bootstrap necessitam dos arquivos Js de jQuery, Popper e dos próprios plugins JavaScript. Sendo necessário seguir uma ordem; jQuery em primeiro depois Popper.js e por ultimo os plugins JS e o Bootstrap.
  [Saiba Mais](README.md)

## Layout:

- [Containers](README.md): sendo os elementos mais básicos do Bootstrap são necessários quando usamos o sistema de grid padrão. Pode ser escolhido entre dois tipos de container;
  + Responsivo de largura fixa
  ```HTML
  <div class="container">
    <!--Escrever algo aqui-->
  </div>
  ```
  + Responsivo de largura fluida
  ```HTML
  <div class="container-fluid">
    <!--Escrever algo aqui-->
  </div>
  ```
- [Grid](README.md): Utiliza vários containers, para organizar o conteúdo. Utilizando o [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) que o torna totalmente responsivo.
  Exemplo:

  ```HTML
  <div class="container">
    <div class="row">
        <div class="col-sm">
            Uma de três colunas
        </div>
        <div class="col-sm">
            Duas de três colunas
        </div>
        <div class="col-sm">
            Três de três colunas
        </div>
    </div>
  </div>
  ```

  O exemplo acima cria 3 larguras idênticas, usando grids pré-definidas. Tendo as colunas centralizadas na página pelo seu elemento pai "container".  
   Utiliza row para indicar as linhas da sua grid e col para indicar a coluna da grid. Cada linha possui no máximo 12 colunas, podendo definir seu tamanho usando .col-X onde X é o tamanho da sua coluna. Exemplo:

  ```HTML
  <div class="container">
    <div class="row">
        <div class="col-sm .col-4">
            Uma de três colunas
        </div>
        <div class="col-sm .col-8">
            Duas de três colunas
        </div>
    </div>
  </div>
  ```
  A primeira coluna do código acima ocupara apenas 4 espaços e o restante(8) esta na segunda coluna.

  ### Outros parâmetros grid:
  ![param](paramGrid.png)  
  Usando essas classes de breakpoints especificas é possível definir estilos específicos para quando a grid estiver um tamanho determinado. 
  Exemplo:
  ```HTML
  <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-lg-2">
            1 de 3
            </div>
            <div class="col-md-4 col-xl-6">
                Conteúdo com largura variável
            </div>
            <div class="col col-lg-2">
                3 de 3
            </div>
        </div>
  </div>
  ```
  No código acima a coluna do meio terá seu tamanho variando de acordo com o tamanho da tela do dispositivo(tamanho da grid), sendo que ela ocupa 6 espaços em dispositivos grandes(com tela > 1200 pixels) e 4 espaços em dispositivos médios(com tela > 720 pixels).

### Alinhamento
- Vertical:
    ```HTML
    <div class="container">
        <div class="row">
            <div class="col align-self-start">
                Uma de três colunas
            </div>
            <div class="col align-self-center">
                Uma de três colunas
            </div>
            <div class="col align-self-end">
                Uma de três colunas
            </div>
        </div>
    </div>
    ```
    ![Alinhamento Vertical](AlinhamentoVertical.png)
- Horizontal:
    ```HTML
    <div class="container">
        <div class="row justify-content-start">
            <div class="col-4">
            Uma de duas colunas
            </div>
            <div class="col-4">
            Uma de duas colunas
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-4">
            Uma de duas colunas
            </div>
            <div class="col-4">
            Uma de duas colunas
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-4">
            Uma de duas colunas
            </div>
            <div class="col-4">
            Uma de duas colunas
            </div>
        </div>
        <div class="row justify-content-around">
            <div class="col-4">
            Uma de duas colunas
            </div>
            <div class="col-4">
            Uma de duas colunas
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-4">
            Uma de duas colunas
            </div>
            <div class="col-4">
            Uma de duas colunas
            </div>
        </div>
    </div>    
    ```
    ![Alinhamento Horizontal](AlinhamentoHorizontal.png)
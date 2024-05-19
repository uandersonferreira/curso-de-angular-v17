### Atributos Globais de HTML

- **`class`**: Define uma ou mais classes de CSS para o elemento.

  ```html
  <div class="container highlight">Conteúdo aqui</div>
  ```

- **`id`**: Define um identificador único para o elemento.

  ```html
  <div id="header">Cabeçalho da Página</div>
  ```

- **`style`**: Contém declarações CSS que são aplicadas ao elemento.

  ```html
  <p style="color: red; font-size: 20px;">Texto em vermelho</p>
  ```

- **`title`**: Fornece informações adicionais sobre o elemento, exibidas como uma dica de ferramenta (tooltip) quando o mouse passa sobre o elemento.

  ```html
  <button title="Clique para enviar">Enviar</button>
  ```

- **`data-*`**: Permite a criação de atributos personalizados que armazenam dados privados para uso das páginas ou scripts.

  ```html
  <div data-user-id="12345" data-role="admin">Usuário</div>
  ```

- **`hidden`**: Indica que o elemento ainda não é, ou não é mais, relevante. Elementos ocultos não são exibidos.

  ```html
  <div hidden>Este conteúdo está oculto</div>
  ```

- **`tabindex`**: Especifica a ordem de navegação pelo teclado para o elemento.

  ```html
  <button tabindex="1">Primeiro</button> <button tabindex="2">Segundo</button>
  ```

- **`lang`**: Define o idioma do conteúdo do elemento.

  ```html
  <p lang="en">Hello, World!</p>
  ```

- **`dir`**: Define a direção do texto do elemento (`ltr` para left-to-right, `rtl` para right-to-left, ou `auto`).

  ```html
  <p dir="rtl">مرحبا بكم</p>
  ```

- **`contenteditable`**: Indica se o conteúdo do elemento é editável pelo usuário.

  ```html
  <div contenteditable="true">Você pode editar este texto</div>
  ```

- **`draggable`**: Especifica se um elemento pode ser arrastado.

  ```html
  <div draggable="true">Arraste este item</div>
  ```

- **`spellcheck`**: Indica se o navegador deve verificar a ortografia e a gramática do conteúdo do elemento.

  ```html
  <textarea spellcheck="true">Digite seu texto aqui...</textarea>
  ```

- **`accesskey`**: Especifica uma tecla de atalho para ativar/focar o elemento.

  ```html
  <button accesskey="s">Salvar (Alt + S)</button>
  ```

- **`autocapitalize`**: Controla a autocapitalização do texto introduzido pelo usuário.

  ```html
  <input type="text" autocapitalize="words" />
  ```

- **`translate`**: Especifica se o conteúdo de um elemento deve ser traduzido ou não.
  ```html
  <p translate="no">BrandName</p>
  ```

### Atributos Globais de Eventos

#### Eventos de Mouse

- **`onclick`**: Disparado quando o elemento é clicado.

  ```html
  <button onclick="alert('Botão clicado!')">Clique-me</button>
  ```

- **`ondblclick`**: Disparado quando o elemento é duplamente clicado.

  ```html
  <div ondblclick="alert('Duplo clique!')">Clique duas vezes</div>
  ```

- **`onmouseover`**: Disparado quando o ponteiro do mouse é movido para cima do elemento.

  ```html
  <div onmouseover="this.style.color='blue'">Passe o mouse aqui</div>
  ```

- **`onmouseout`**: Disparado quando o ponteiro do mouse é movido para fora do elemento.

  ```html
  <div onmouseout="this.style.color='black'">Passe o mouse fora</div>
  ```

- **`onmousedown`**: Disparado quando um botão do mouse é pressionado sobre o elemento.

  ```html
  <div onmousedown="this.style.backgroundColor='yellow'">Pressione o mouse aqui</div>
  ```

- **`onmouseup`**: Disparado quando um botão do mouse é liberado sobre o elemento.
  ```html
  <div onmouseup="this.style.backgroundColor='green'">Solte o mouse aqui</div>
  ```

#### Eventos de Teclado

- **`onkeydown`**: Disparado quando uma tecla é pressionada.

  ```html
  <input onkeydown="console.log('Tecla pressionada')" />
  ```

- **`onkeyup`**: Disparado quando uma tecla é liberada.

  ```html
  <input onkeyup="console.log('Tecla liberada')" />
  ```

- **`onkeypress`**: Disparado quando uma tecla é pressionada e liberada.
  ```html
  <input onkeypress="console.log('Tecla pressionada e liberada')" />
  ```

#### Eventos de Formulário

- **`onsubmit`**: Disparado quando um formulário é submetido.

  ```html
  <form onsubmit="return validateForm()"></form>
  ```

- **`onreset`**: Disparado quando um formulário é resetado.

  ```html
  <form onreset="alert('Formulário resetado')"></form>
  ```

- **`onchange`**: Disparado quando o valor de um elemento é alterado e o foco é movido para fora do elemento.

  ```html
  <input type="text" onchange="console.log('Valor alterado')" />
  ```

- **`oninput`**: Disparado imediatamente quando o valor de um elemento é alterado.

  ```html
  <input type="text" oninput="console.log('Evento de entrada')" />
  ```

- **`onfocus`**: Disparado quando um elemento recebe foco.

  ```html
  <input onfocus="this.style.backgroundColor='yellow'" />
  ```

- **`onblur`**: Disparado quando um elemento perde o foco.
  ```html
  <input onblur="this.style.backgroundColor='white'" />
  ```

#### Eventos de Janela

- **`onload`**: Disparado quando a página é carregada.

  ```html
  <body onload="initFunction()"></body>
  ```

- **`onunload`**: Disparado quando a página está prestes a ser descarregada.

  ```html
  <body onunload="cleanupFunction()"></body>
  ```

- **`onresize`**: Disparado quando a janela do navegador é redimensionada.

  ```html
  <body onresize="resizeFunction()"></body>
  ```

- **`onscroll`**: Disparado quando a página é rolada.
  ```html
  <div onscroll="scrollFunction()"></div>
  ```

#### Outros Eventos

- **`oncontextmenu`**: Disparado quando o menu de contexto (menu do botão direito) é aberto.

  ```html
  <div oncontextmenu="alert('Menu de contexto aberto')">Clique com o botão direito</div>
  ```

- **`oncopy`**: Disparado quando o conteúdo é copiado.

  ```html
  <p oncopy="alert('Conteúdo copiado')">Copie este texto</p>
  ```

- **`oncut`**: Disparado quando o conteúdo é cortado.

  ```html
  <p oncut="alert('Conteúdo cortado')">Corte este texto</p>
  ```

- **`onpaste`**: Disparado quando o conteúdo é colado.
  ```html
  <p onpaste="alert('Conteúdo colado')">Cole algo aqui</p>
  ```

### Principais Propriedades de HTML com Exemplos de HTML e JavaScript

- **`accept`**: Especifica os tipos de arquivos que o servidor aceita (aplicável a elementos `<input>` do tipo "file").

  - **HTML**: `<input type="file" accept=".jpg, .jpeg, .png">`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="file"]').accept = ".jpg, .jpeg, .png";
    ```

- **`accept-charset`**: Define os conjuntos de caracteres que o servidor aceita (aplicável a elementos `<form>`).

  - **HTML**: `<form accept-charset="UTF-8">`
  - **JavaScript**:
    ```javascript
    document.querySelector("form").acceptCharset = "UTF-8";
    ```

- **`action`**: Especifica a URL para onde os dados do formulário devem ser enviados (aplicável a elementos `<form>`).

  - **HTML**: `<form action="/submit">`
  - **JavaScript**:
    ```javascript
    document.querySelector("form").action = "/submit";
    ```

- **`alt`**: Fornece um texto alternativo para uma imagem (aplicável a elementos `<img>`, `<area>`, `<input>`).

  - **HTML**: `<img src="image.jpg" alt="Descrição da imagem">`
  - **JavaScript**:
    ```javascript
    document.querySelector("img").alt = "Descrição da imagem";
    ```

- **`async`**: Especifica que o script será executado assincronamente (aplicável a elementos `<script>`).

  - **HTML**: `<script src="script.js" async></script>`
  - **JavaScript**:
    ```javascript
    document.querySelector("script").async = true;
    ```

- **`autoplay`**: Indica que o áudio ou vídeo deve começar a ser reproduzido assim que for carregado (aplicável a elementos `<audio>`, `<video>`).

  - **HTML**: `<video src="video.mp4" autoplay></video>`
  - **JavaScript**:
    ```javascript
    document.querySelector("video").autoplay = true;
    ```

- **`charset`**: Define a codificação de caracteres do documento (aplicável a elementos `<meta>`).

  - **HTML**: `<meta charset="UTF-8">`
  - **JavaScript**:
    ```javascript
    document.querySelector("meta").setAttribute("charset", "UTF-8");
    ```

- **`checked`**: Indica que uma caixa de seleção ou botão de rádio está selecionado (aplicável a elementos `<input>` do tipo "checkbox" ou "radio").

  - **HTML**: `<input type="checkbox" checked>`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="checkbox"]').checked = true;
    ```

- **`cite`**: Contém uma URL que designa a fonte de uma citação (aplicável a elementos `<blockquote>`, `<q>`, `<del>`, `<ins>`).

  - **HTML**: `<blockquote cite="http://example.com">Citação</blockquote>`
  - **JavaScript**:
    ```javascript
    document.querySelector("blockquote").cite = "http://example.com";
    ```

- **`cols`**: Define o número de colunas visíveis de um `<textarea>` (aplicável a elementos `<textarea>`).

  - **HTML**: `<textarea cols="30"></textarea>`
  - **JavaScript**:
    ```javascript
    document.querySelector("textarea").cols = 30;
    ```

- **`colspan`**: Define o número de colunas que uma célula de tabela deve abranger (aplicável a elementos `<td>`, `<th>`).

  - **HTML**: `<td colspan="2">Conteúdo</td>`
  - **JavaScript**:
    ```javascript
    document.querySelector("td").colSpan = 2;
    ```

- **`content`**: Define o valor do atributo associado (aplicável a elementos `<meta>`).

  - **HTML**: `<meta name="description" content="Descrição do site">`
  - **JavaScript**:
    ```javascript
    document.querySelector('meta[name="description"]').content = "Descrição do site";
    ```

- **`controls`**: Especifica que controles de reprodução (como play, pause) devem ser exibidos (aplicável a elementos `<audio>`, `<video>`).

  - **HTML**: `<video src="video.mp4" controls></video>`
  - **JavaScript**:
    ```javascript
    document.querySelector("video").controls = true;
    ```

- **`coords`**: Especifica as coordenadas para uma área em um mapa de imagem (aplicável a elementos `<area>`).

  - **HTML**: `<area shape="rect" coords="34,44,270,350" href="http://example.com">`
  - **JavaScript**:
    ```javascript
    document.querySelector("area").coords = "34,44,270,350";
    ```

- **`data`**: Especifica a URL de recursos que devem ser usados pelo objeto (aplicável a elementos `<object>`).

  - **HTML**: `<object data="file.pdf" type="application/pdf"></object>`
  - **JavaScript**:
    ```javascript
    document.querySelector("object").data = "file.pdf";
    ```

- **`datetime`**: Indica a data e hora associadas ao elemento (aplicável a elementos `<time>`, `<del>`, `<ins>`).

  - **HTML**: `<time datetime="2024-05-18">18 de Maio de 2024</time>`
  - **JavaScript**:
    ```javascript
    document.querySelector("time").dateTime = "2024-05-18";
    ```

- **`default`**: Especifica que a faixa de texto deve ser predefinida (aplicável a elementos `<track>`).

  - **HTML**: `<track src="subtitles.vtt" kind="subtitles" srclang="en" label="English" default>`
  - **JavaScript**:
    ```javascript
    document.querySelector("track").default = true;
    ```

- **`defer`**: Indica que o script deve ser executado após a página ser carregada (aplicável a elementos `<script>`).

  - **HTML**: `<script src="script.js" defer></script>`
  - **JavaScript**:
    ```javascript
    document.querySelector("script").defer = true;
    ```

- **`disabled`**: Indica que o elemento deve ser desativado (aplicável a elementos `<button>`, `<input>`, `<select>`, `<textarea>`, `<fieldset>`, `<optgroup>`, `<option>`).

  - **HTML**: `<button disabled>Botão Desativado</button>`
  - **JavaScript**:
    ```javascript
    document.querySelector("button").disabled = true;
    ```

- **`download`**: Indica que o destino do hyperlink deve ser baixado (aplicável a elementos `<a>`).

  - **HTML**: `<a href="file.zip" download>Baixar Arquivo</a>`
  - **JavaScript**:
    ```javascript
    document.querySelector("a").download = "file.zip";
    ```

- **`enctype`**: Especifica como os dados do formulário devem ser codificados ao serem enviados (aplicável a elementos `<form>`).

  - **HTML**: `<form enctype="multipart/form-data">`
  - **JavaScript**:
    ```javascript
    document.querySelector("form").enctype = "multipart/form-data";
    ```

- **`for`**: Especifica o relacionamento entre o elemento e o controle de formulário (aplicável a elementos `<label>`, `<output>`).

  - **HTML**: `<label for="inputId">Etiqueta</label>`
  - **JavaScript**:
    ```javascript
    document.querySelector("label").htmlFor = "inputId";
    ```

- **`headers`**: Especifica as células de cabeçalho associadas a uma célula de tabela (aplicável a elementos `<td>`).

  - **HTML**: `<td headers="headerId">Dado</td>`
  - **JavaScript**:
    ```javascript
    document.querySelector("td").headers = "headerId";
    ```

- **`height`**: Define a altura do elemento (aplicável a elementos `<img>`, `<video>`, `<iframe>`, `<object>`, `<embed>`).

  - **HTML**: `<img src="image.jpg" height="200">`
  - **JavaScript**:
    ```javascript
    document.querySelector("img").height = 200;
    ```

- **`href`**: Especifica a URL de um hyperlink (aplicável a elementos `<a>`, `<link>`).
  - **HTML**: `<a href="http://example.com">Link</a>`
  - **JavaScript**:
    ```javascript
    document.querySelector("a").href = "http://example.com";
    ```

- **`hreflang`**: Especifica o idioma do destino do hyperlink (aplicável a elementos `<a>`, `<link>`).

  - **HTML**: `<a href="http://example.com" hreflang="en">Link</a>`
  - **JavaScript**:
    ```javascript
    document.querySelector("a").hreflang = "en";
    ```

- **`http-equiv`**: Fornece informações ao navegador sobre a configuração da página (aplicável a elementos `<meta>`).

  - **HTML**: `<meta http-equiv="refresh" content="5">`
  - **JavaScript**:
    ```javascript
    document.querySelector('meta[http-equiv="refresh"]').content = "5";
    ```

- **`kind`**: Especifica o tipo de trilha de texto (aplicável a elementos `<track>`).

  - **HTML**: `<track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">`
  - **JavaScript**:
    ```javascript
    document.querySelector("track").kind = "subtitles";
    ```

- **`label`**: Especifica um rótulo para a trilha de texto (aplicável a elementos `<track>`).

  - **HTML**: `<track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">`
  - **JavaScript**:
    ```javascript
    document.querySelector("track").label = "English";
    ```

- **`lang`**: Define o idioma do conteúdo do elemento (aplicável a todos os elementos).

  - **HTML**: `<p lang="en">Hello World!</p>`
  - **JavaScript**:
    ```javascript
    document.querySelector("p").lang = "en";
    ```

- **`loop`**: Indica que o áudio ou vídeo deve ser reproduzido em loop (aplicável a elementos `<audio>`, `<video>`).

  - **HTML**: `<video src="video.mp4" loop></video>`
  - **JavaScript**:
    ```javascript
    document.querySelector("video").loop = true;
    ```

- **`max`**: Especifica o valor máximo permitido (aplicável a elementos `<input>`, `<meter>`).

  - **HTML**: `<input type="number" max="100">`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="number"]').max = 100;
    ```

- **`maxlength`**: Define o número máximo de caracteres permitidos (aplicável a elementos `<input>`, `<textarea>`).

  - **HTML**: `<input type="text" maxlength="50">`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="text"]').maxLength = 50;
    ```

- **`media`**: Especifica os tipos de dispositivos de mídia para os quais o documento de estilo é otimizado (aplicável a elementos `<link>`, `<source>`, `<style>`).

  - **HTML**: `<link rel="stylesheet" href="style.css" media="screen">`
  - **JavaScript**:
    ```javascript
    document.querySelector('link[rel="stylesheet"]').media = "screen";
    ```

- **`method`**: Define o método HTTP a ser usado ao enviar dados de formulário (aplicável a elementos `<form>`).

  - **HTML**: `<form action="/submit" method="post">`
  - **JavaScript**:
    ```javascript
    document.querySelector("form").method = "post";
    ```

- **`min`**: Especifica o valor mínimo permitido (aplicável a elementos `<input>`, `<meter>`).

  - **HTML**: `<input type="number" min="0">`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="number"]').min = 0;
    ```

- **`multiple`**: Indica que múltiplos valores podem ser selecionados (aplicável a elementos `<input>` do tipo "file", `<select>`).

  - **HTML**: `<input type="file" multiple>`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="file"]').multiple = true;
    ```

- **`muted`**: Especifica que o áudio deve ser inicializado como mudo (aplicável a elementos `<audio>`, `<video>`).

  - **HTML**: `<video src="video.mp4" muted></video>`
  - **JavaScript**:
    ```javascript
    document.querySelector("video").muted = true;
    ```

- **`name`**: Define o nome do elemento (aplicável a elementos `<button>`, `<form>`, `<fieldset>`, `<iframe>`, `<input>`, `<object>`, `<output>`, `<select>`, `<textarea>`).

  - **HTML**: `<input type="text" name="username">`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="text"]').name = "username";
    ```

- **`novalidate`**: Indica que o formulário não deve ser validado ao ser submetido (aplicável a elementos `<form>`).
  - **HTML**: `<form action="/submit" novalidate>`
  - **JavaScript**:
```javascript
document.querySelector("form").noValidate = true;
```

- **`open`**: Indica que os detalhes do elemento `<details>` estão visíveis (aplicável a elementos `<details>`).

  - **HTML**: `<details open>`
  - **JavaScript**:
    ```javascript
    document.querySelector("details").open = true;
    ```

- **`pattern`**: Especifica uma expressão regular que o valor do campo de entrada deve corresponder (aplicável a elementos `<input>`).

  - **HTML**: `<input type="text" pattern="[A-Za-z]{3}">`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="text"]').pattern = "[A-Za-z]{3}";
    ```

- **`placeholder`**: Fornece uma dica ao usuário sobre o que pode ser inserido no campo (aplicável a elementos `<input>`, `<textarea>`).

  - **HTML**: `<input type="text" placeholder="Digite aqui">`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="text"]').placeholder = "Digite aqui";
    ```

- **`poster`**: Define uma imagem a ser mostrada enquanto o vídeo não é reproduzido (aplicável a elementos `<video>`).

  - **HTML**: `<video src="video.mp4" poster="thumbnail.jpg"></video>`
  - **JavaScript**:
    ```javascript
    document.querySelector("video").poster = "thumbnail.jpg";
    ```

- **`preload`**: Especifica se o vídeo deve ser carregado automaticamente (aplicável a elementos `<audio>`, `<video>`).

  - **HTML**: `<video src="video.mp4" preload="auto"></video>`
  - **JavaScript**:
    ```javascript
    document.querySelector("video").preload = "auto";
    ```

- **`readonly`**: Indica que o campo de entrada não pode ser modificado pelo usuário (aplicável a elementos `<input>`, `<textarea>`).

  - **HTML**: `<input type="text" value="Valor" readonly>`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="text"]').readOnly = true;
    ```

- **`rel`**: Define a relação entre o documento atual e o documento vinculado (aplicável a elementos `<a>`, `<area>`, `<link>`).

  - **HTML**: `<a href="http://example.com" rel="noopener">Link</a>`
  - **JavaScript**:
    ```javascript
    document.querySelector("a").rel = "noopener";
    ```

- **`required`**: Indica que o campo de entrada deve ser preenchido antes do envio do formulário (aplicável a elementos `<input>`, `<select>`, `<textarea>`).

  - **HTML**: `<input type="text" required>`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="text"]').required = true;
    ```

- **`reversed`**: Indica que a lista ordenada deve ser exibida em ordem decrescente (aplicável a elementos `<ol>`).

  - **HTML**: `<ol reversed>`
  - **JavaScript**:
    ```javascript
    document.querySelector("ol").reversed = true;
    ```

- **`rows`**: Define o número de linhas visíveis em um `<textarea>` (aplicável a elementos `<textarea>`).

  - **HTML**: `<textarea rows="4"></textarea>`
  - **JavaScript**:
    ```javascript
    document.querySelector("textarea").rows = 4;
    ```

- **`rowspan`**: Define o número de linhas que uma célula de tabela deve abranger (aplicável a elementos `<td>`, `<th>`).

  - **HTML**: `<td rowspan="2">Dado</td>`
  - **JavaScript**:
    ```javascript
    document.querySelector("td").rowSpan = 2;
    ```

- **`sandbox`**: Habilita um conjunto de restrições adicionais para o conteúdo em um `<iframe>` (aplicável a elementos `<iframe>`).

  - **HTML**: `<iframe src="http://example.com" sandbox="allow-same-origin allow-scripts"></iframe>`
  - **JavaScript**:
    ```javascript
    document.querySelector("iframe").sandbox = "allow-same-origin allow-scripts";
    ```

- **`scope`**: Especifica a célula de cabeçalho associada a uma célula de tabela (aplicável a elementos `<th>`).

  - **HTML**: `<th scope="row">Dado</th>`
  - **JavaScript**:
    ```javascript
    document.querySelector("th").scope = "row";
    ```

- **`selected`**: Indica que uma opção em um menu suspenso está selecionada (aplicável a elementos `<option>`).

  - **HTML**: `<select><option value="1">Opção 1</option><option value="2" selected>Opção 2</option></select>`
  - **JavaScript**:
    ```javascript
    document.querySelectorAll("option")[1].selected = true;
    ```

- **`shape`**: Define a forma de uma área em um mapa de imagem (aplicável a elementos `<area>`).

  - **HTML**: `<area shape="circle" coords="90,58,3" href="http://example.com">`
  - **JavaScript**:
    ```javascript
    document.querySelector("area").shape = "circle";
    ```

- **`size`**: Define o número de opções visíveis em um menu suspenso (aplicável a elementos `<input>` do tipo "text", `<select>`).

  - **HTML**: `<select size="3"><option value="1">Opção 1</option><option value="2">Opção 2</option><option value="3">Opção 3</option></select>`
  - **JavaScript**:
    ```javascript
    document.querySelector("select").size = 3;
    ```

- **`sizes`**: Define os tamanhos dos ícones para diferentes resoluções (aplicável a elementos `<link>`).

  - **HTML**: `<link rel="icon" href="favicon.ico" sizes="16x16 32x32">`
  - **JavaScript**:
    ```javascript
    document.querySelector('link[rel="icon"]').sizes = "16x16 32x32";
    ```

- **`span`**: Define o número de colunas que um elemento `<col>` ou `<colgroup>` deve abranger (aplicável a elementos `<col>`, `<colgroup>`).
  - **HTML**: `<col span="2">`
  - **JavaScript**:
    ```javascript
    document.querySelector("col").span = 2;
    ```

- **`src`**: Especifica a URL da mídia (aplicável a elementos <audio>, <embed>, <iframe>, <img>, <input>, <script>, <source>, <track>, <video>).

```javascript
document.querySelector("audio").src = "audio.mp3";
```

- **`srcdoc`**: Especifica o conteúdo HTML a ser exibido em um `<iframe>` (aplicável a elementos `<iframe>`).

  - **HTML**: `<iframe srcdoc="<p>Conteúdo HTML</p>"></iframe>`
  - **JavaScript**:
    ```javascript
    document.querySelector("iframe").srcdoc = "<p>Conteúdo HTML</p>";
    ```

- **`srclang`**: Define o idioma das faixas de texto (aplicável a elementos `<track>`).

  - **HTML**: `<track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">`
  - **JavaScript**:
    ```javascript
    document.querySelector("track").srclang = "en";
    ```

- **`srcset`**: Especifica diferentes URLs da imagem para diferentes resoluções de tela (aplicável a elementos `<img>`, `<source>`).

  - **HTML**: `<img src="image.jpg" srcset="image.jpg 1x, image@2x.jpg 2x">`
  - **JavaScript**:
    ```javascript
    document.querySelector("img").srcset = "image.jpg 1x, image@2x.jpg 2x";
    ```

- **`start`**: Define o número inicial de uma lista ordenada (aplicável a elementos `<ol>`).

  - **HTML**: `<ol start="3"><li>Item 1</li><li>Item 2</li></ol>`
  - **JavaScript**:
    ```javascript
    document.querySelector("ol").start = 3;
    ```

- **`step`**: Define os incrementos permitidos para um campo de entrada (aplicável a elementos `<input>`).

  - **HTML**: `<input type="number" step="2">`
  - **JavaScript**:
    ```javascript
    document.querySelector('input[type="number"]').step = 2;
    ```

- **`style`**: Contém declarações CSS que são aplicadas ao elemento (aplicável a todos os elementos).

  - **HTML**: `<div style="color: red; font-size: 16px;">Conteúdo</div>`
  - **JavaScript**:
    ```javascript
    document.querySelector("div").style.color = "red";
    document.querySelector("div").style.fontSize = "16px";
    ```

- **`tabindex`**: Especifica a ordem de navegação pelo teclado para o elemento (aplicável a todos os elementos).

  - **HTML**: `<button tabindex="1">Botão 1</button>`
  - **JavaScript**:
    ```javascript
    document.querySelector("button").tabIndex = 1;
    ```

- **`target`**: Especifica onde abrir o documento vinculado (aplicável a elementos `<a>`, `<area>`, `<form>`, `<base>`).

  - **HTML**: `<a href="http://example.com" target="_blank">Link</a>`
  - **JavaScript**:
    ```javascript
    document.querySelector("a").target = "_blank";
    ```

- **`title`**: Fornece informações adicionais sobre o elemento, exibidas como uma dica de ferramenta (aplicável a todos os elementos).

  - **HTML**: `<img src="image.jpg" alt="Imagem" title="Descrição da Imagem">`
  - **JavaScript**:
    ```javascript
    document.querySelector("img").title = "Descrição da Imagem";
    ```

- **`translate`**: Especifica se o conteúdo de um elemento deve ser traduzido ou não (aplicável a todos os elementos).

  - **HTML**: `<p translate="no">Texto não traduzível</p>`
  - **JavaScript**:
    ```javascript
    document.querySelector("p").translate = "no";
    ```

- **`type`**: Define o tipo de elemento (aplicável a elementos `<button>`, `<input>`, `<embed>`, `<object>`, `<script>`, `<source>`, `<style>`).

  - **HTML**: `<input type="text">`
  - **JavaScript**:
    ```javascript
    document.querySelector("input").type = "text";
    ```

- **`usemap`**: Especifica um mapa de imagem para um elemento `<img>`.
  - **HTML**: `<img src="planets.jpg" usemap="#planetmap" alt="Planets" />`
  - **JavaScript**:
    ```javascript
    document.querySelector("img").useMap = "#planetmap";
    ```

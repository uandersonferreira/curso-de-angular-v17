import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputText = 'components-dinamicos';
  inputType = 'text';
  isDisabled = false; //Está desabilitado ?

  enableInput() {
    this.isDisabled = false;
  }

  disabledInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputText = 'password';
  }

  setTextTypeInput() {
    this.inputText = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
    /*
     Alguns eventos podem retornar alguma
     respota, por isso estamos passando uma
     variavel que irá armazenar o valor dessa
     respota.
    (keyup)="handleInputKeyup($event)"
            "lidar com entrada Keyup"
    */
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  /*

  ATRIBUTO - value="Texto inicial"
  PROPRIEDADE - [value] = "Texto inicial"

  Property binding == Vinculação de propriedade

Property binding no Angular é uma maneira de passar dados do componente
TypeScript para o template HTML. Utiliza colchetes `[]` em torno do nome
da propriedade HTML. Por exemplo:

```html
<img [src]="imageUrl">
```

COMPONENT -> para -> HTML

[OBS] PROPRIEDADE - [value] = "Texto inicial"
quando fazemos um property binding com o value
ele não irá pegar o valor alterado dinamicamente
a comunicação e entre a variavel definida no component
e a propriedade:
ex:  [value]="inputText"
--------------------------------------------------------------------------------------------

Event Binding == Vinculação de evento (keyup)='handleInputKeyup($event)'

Event binding no Angular é usado para ouvir eventos no
template HTML e chamar métodos no componente TypeScript
quando esses eventos ocorrem. Utiliza parênteses () em torno
do nome do evento.Por exemplo:

<button (click)="onButtonClick()">Clique aqui</button>

Neste exemplo, (click) é um evento de clique do botão. Quando o
botão é clicado, o método onButtonClick() no componente é chamado.

OBS: Não têm o prefixo 'on', pois utilizar o nome do
evento DOM padrão, como click, input, change, etc.

click == onClick() -> ao clicar

*/
} //class

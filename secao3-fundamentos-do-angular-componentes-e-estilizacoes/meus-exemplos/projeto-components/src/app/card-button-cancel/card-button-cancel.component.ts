import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  styleUrl: './card-button-cancel.component.scss',
  /*
    E ao utiliza style externo(styleUrl) + interno(styles) caso
    aplique um style diferente será feito a mesclagem dos stilos
    definidos em ambos os arquivos.
     ex: color: yellow;
    - pega o stilo do externo + interno e irá aplicar.
  */

  //Style local têm preferência em relação ao externo definido em styleUrl.
  styles: [
    `
      .card-cancel-button {
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: #0d861d;
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
      }
    `,

    `
    .card-cancel-button {
      //O último style aplicado é o que prevale, caso seja aplicado
      //em cima de uma mesma propriedade.
      background-color: black;
    }
  `

  ],
})
export class CardButtonCancelComponent {}

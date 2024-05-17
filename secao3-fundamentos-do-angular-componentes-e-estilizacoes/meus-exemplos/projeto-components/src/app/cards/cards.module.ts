import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    /*

    @Component declarado em mais de um "@NgModule" - isso é errado.
    pois quando precisamos IMPORTAR esse módulo irá dar erro
    caso não importe o módulo irá executar normalmente, mas estamos criando um problema oculto
    que pode dar muita dor de cabeça futuramente.

    OBS: Para usar um @Component de um Modulo em outro modulo a gente segue os seguintes passos:
      1° - Exportar o componente
      2° - Importar o modulo desse component no 'imports' do módulo
          que queremos usar o component.
    */
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  //1° - [PASSO] Declara que os components desse módulo pode ser vistos/usados
  //por outros módulos > torna eles protected/public,pois para usar teremos que
  //importar esse módulo [extends do java]. "Podem ser consumidos"
  exports: [
    CardComponent,
    CardRoxoComponent,
    /*
      - Por serem @Component filhos de card e cardRoxo, não estão sendo chamados
      diretamente no app.component.html, então não há a necessidade
      de ser exporta, mas caso queira utilizar os buttons personalizados
      deveriamos exportar eles também.
    */
    // CardButtonComponent,
    CardRoxoButtonComponent, //Exportando para demonstrar o exemplo descrito acima.
  ],
})
export class CardsModule {}

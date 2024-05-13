import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardRoxoButtonComponent } from './card-roxo-button/card-roxo-button.component';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    //Declaração dos componentes - @Component desse módulo
    AppComponent,

        /*
    
    @Component declarado em mais de um "@NgModule" - isso é errado.
    pois quando precisamos IMPORTAR esse módulo irá dar erro
    caso não importe o módulo irá executar normalmente, mas estamos criando um problema oculto
    que pode dar muita dor de cabeça futuramente. 

    OBS: Para usar um @Component de um Modulo em outro modulo a gente segue os seguintes passos:
      1° - Exportar o(s) componente(s)
      2° - Importar o modulo desse component no 'imports' do módulo
          que queremos usar o component. Pois não 
          declaramos @Components de modulo diferentes em nosso módulo.
        
    ex:CardComponent,  [ERRADO]   
    */
          
  ],

  //2° - [PASSO] É importar o modulo que queremos utilizar os components
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule 
    /*
      Nesse array estamos importando todos os módulos, que
      desejamos utilizar alguma funcionalidade.
    */
  ],

  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]//1° Component a ser carregado (o conteúdo do .html)
})
export class AppModule { }
/*
  @NgModule - Define que a class é um Módulo

  @Component - A GENTE DECLARAR NO NOSSO MÓDULO > declarations
  @NgModule - A GENTE IMPORTA > 'imports' PARA DENTRO DO MÓDULO DO NOSSO COMPONENT


*/
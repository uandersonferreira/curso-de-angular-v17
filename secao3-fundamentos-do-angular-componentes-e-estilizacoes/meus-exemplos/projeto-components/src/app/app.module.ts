import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';

@NgModule({
  declarations: [
    //Declaração dos componentes - @Component
    AppComponent,
    CardComponent,
    CardRoxoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
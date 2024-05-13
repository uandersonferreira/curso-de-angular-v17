import { Component } from '@angular/core';
import { info } from 'console';

@Component({
  selector: 'app-card', //tag html do component
  templateUrl: './card.component.html', //file .html do component
  styleUrl: './card.component.scss', // file .css do component
})

//Classe - Modelagem do objeto + Lógica de serviço
export class CardComponent {
 tipo = 'Teste';
 preco = 100;

   //Object
   plano = {
    infos: {
      tipoPlano: 'Simples',
      precoPlano: 'R$100,00/Mês',
    },
  };


  ngOnInit() {
    setTimeout(() => {
      this.tipo = 'Completo';
    }, 3000);
  }

  getFullPrice() {
    return 'R$' + this.preco + ',00/Mês';
  }//method



}//class

/*
  Binding - Fazer a associação de um atributo/method
  ao html.

  ex: interpolação - {{ variavel/method }}

  */

import { Component, ViewEncapsulation } from '@angular/core';


interface IPlan{
  infos: IInfos
}

interface IInfos{
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card', //tag html do component
  templateUrl: './card.component.html', //file .html do component
  styleUrl: './card.component.scss', // file .css do component
  //encapsulation: ViewEncapsulation.None //Não é recomendado
  encapsulation: ViewEncapsulation.Emulated //padrão default
  /*
  encapsulation: ViewEncapsulation.None:
  O Angular não aplica nenhum tipo de encapsulamento de visualização,
  o que significa que quaisquer estilos especificados para o componente
  são realmente aplicados globalmente e podem afetar qualquer elemento
  HTML presente dentro do aplicativo. Este modo é essencialmente o mesmo
  que incluir os estilos no próprio HTML.
  Ficam 'Global' em toda a aplicação

  ViewEncapsulation.Emulated (padrão):
  O Angular modifica os seletores CSS do componente para que eles
  sejam aplicados apenas ao modo de exibição do componente e não
  afetem outros elementos no aplicativo, emulando o comportamento
  do Shadow DOM. Styles globais podem afetar o component.

  */
})

//Classe - Modelagem do objeto + Lógica de serviço
export class CardComponent {
  tipo = 'Teste'; //Se undefined não será mostrado nada
  preco = 100;


  //Object
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };

  //Object Undefined - gera erro em tempo de execução(para o cliente) e não de desenvolvimento
  //ex: ERROR TypeError: ctx.plano2 is undefined
  /*
    Neste, caso utilização o Optional Change - ? na frente da propriedade
    para que seja retornado 'undefined' e não mostre nada, mas também, não
    gera exceção de runtime.
    ex: plano2?.tipo
  */

  //@ts-ignore
  plano2: any = {//NG9: Property 'tipoPlano' does not exist on type 'never'.
    infos: undefined,
  };
  //Object vazios e normais em situações em que ele só se tornaram
  //objetos após a eecução de uma ação por isso a necessidade do ? para não
  // gerar erros.

  ngOnInit() {
    setTimeout(() => {
      this.tipo = 'Completo';
    }, 3000);
  }

  getFullPrice() {
    return 'R$' + this.preco + ',00/Mês';
  } //method
} //class

/*
  Binding - Fazer a associação de um atributo/method
  ao html.

  ex: interpolação - {{ variavel/method }}

  */

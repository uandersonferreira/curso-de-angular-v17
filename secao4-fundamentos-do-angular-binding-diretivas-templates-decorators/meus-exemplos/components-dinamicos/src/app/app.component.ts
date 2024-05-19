import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "components-dinamicos";
  inputType = "text";
  isDisabled = false; //Está desabilitado ?

  enableInput(){
    this.isDisabled = false;
  }

  disabledInput(){
    this.isDisabled = true;
  }

  setPasswordTypeInput(){
    this.inputText = 'password';
  }

  setTextTypeInput(){
    this.inputText = 'text';
  }

  logInputText(){
    console.log(this.inputText);
  }





}//class

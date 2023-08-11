import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  [x: string]: any;
  title = 'calculator';

  inputDisplay: any = 0;
  valor1: any;
  resultado: any;
  oper: any;
  gambiarra: any;
  c: any = "AC"


  // changec(){
  //   this.c = "AC"
  // }





  numeral(num: any) {

    if (this.gambiarra) {
      this.inputDisplay = '';
      this.gambiarra = '';
    }
    else if (this.inputDisplay.length == 8) {
      return
    };


    if (this.inputDisplay == this.resultado) {
      this.inputDisplay = '';
    }

    if (this.inputDisplay == 0 || this.inputDisplay === '') {
      this.inputDisplay = num.toString();
      this.c = "C"
    } else if (num === '.' && this.inputDisplay.indexOf('.') === -1) {
      this.inputDisplay += num.toString();
      this.c = "C"
    } else if (num !== '.') {
      this.inputDisplay += num.toString();
      this.c = "C"
  }
    }
    

  operador(signal: any) {
    this.valor1 = this.inputDisplay;
    this.oper = signal;
    this.gambiarra = signal;
    // this.inputDisplay = '';
  }

  ingual() {
    // this.valor1 + this.oper + this.inputDisplay
    const num1 = parseFloat(this.valor1);
    const num2 = parseFloat(this.inputDisplay);

    switch (this.oper) {
      case '+':
        this.resultado = num1 + num2;
        this.inputDisplay = this.resultado;
        break;

      case '*':
        this.resultado = num1 * num2;
        this.inputDisplay = this.resultado;
        break;

      case '-':
        this.resultado = num1 - num2;
        this.inputDisplay = this.resultado;
        break;

      case '/':
        this.resultado = num1 / num2;
        this.inputDisplay = this.resultado;
        break;

        case '':
          this.resultado = num1 / num2;
          this.inputDisplay = this.resultado;
          break;

      default:
        break;
    }
  }

  limpar() {
    if (this.c = "C"){
    this.inputDisplay = '0';
    this.c = "AC"
    }
    else {
      this.inputDisplay = '0';
      this.resultado = '';
      this.oper = '';
      this.valor1 = '';
    }
  }

  alternador(){
    this.inputDisplay = this.inputDisplay * -1
  }
  percent(){
    this.inputDisplay = this.inputDisplay / 100
  }

}

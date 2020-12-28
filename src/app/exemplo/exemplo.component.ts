import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.scss']
})
export class ExemploComponent implements OnInit {

  campo1: number = 0;
  campo2: number = 0;
  resultadoSoma: boolean = true;
  resultado: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  somar(valor1: number, valor2: number): number {
    return valor1 + valor2;
  }

  positivo(valor: number): boolean {
    return valor >= 0 ? true : false;
  }
  somarCampos(){
    const valor1 = Number(this.campo1);
    const valor2 = Number(this.campo2);
    this.resultado = this.somar(valor1, valor2);
    this.resultadoSoma = this.positivo(this.resultado);
  }

}

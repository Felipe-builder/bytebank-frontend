import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number = 0;
  destino: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Solicitada nova Transferência');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);

  }
}

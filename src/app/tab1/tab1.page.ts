import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public obj = {
    "bolos": [
      {
        "titulo": "Bolo de chocolate",
        "preco": "apenas R$ 50",
        "descricao": "Bolo vulcão de chocolate com uma calda incrível."
      },
      {
        "titulo": "Bolo de corbetura de morango",
        "preco": "Preço R$ 60",
        "descricao": "Bolo de corbertura de morango."
      },
      {
        "titulo": "Bolo de chocolate",
        "preco": "apenas R$ 50",
        "descricao": "Bolo de chocolate "
      },
      {
        "titulo": "Bolo de Limão",
        "preco": "apenas R$ 45",
        "descricao": "Bolo de Limaão."
      }
    ]
  }

  constructor() { }

}

import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
}

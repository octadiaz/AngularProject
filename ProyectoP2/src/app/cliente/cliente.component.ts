import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];
  isCardView: boolean = true; // Define la vista inicial como "Tarjeta"

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clientesService.getClientes().subscribe((data) => {
      this.clientes = data;
    });
  }

  toggleView(): void {
    this.isCardView = !this.isCardView; // Cambia entre true y false
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];
  isCardView: boolean = true;
  currentPage: number = 1;
  itemsPerPage: number = 7; 

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
    this.isCardView = !this.isCardView;
    this.currentPage = 1;
  }

  // Método para obtener los clientes de la página actual
  paginatedClientes(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.clientes.slice(start, end);
  }

  // Método para obtener el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.clientes.length / this.itemsPerPage);
  }

  // Método para avanzar a la siguiente página
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Método para retroceder a la página anterior
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}

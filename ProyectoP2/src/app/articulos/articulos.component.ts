import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  articulos: any[] = [];
  mostrarFormulario: boolean = false;
  nuevoArticulo = { descripcion: '', precio: 0 };
  precioError: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private articulosService: ArticulosService,
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.authservice.isAdmin();
    this.getArticulos();
  }

  getArticulos(): void {
    this.articulosService.getArticulos().subscribe(data => {
      this.articulos = data;
    });
  }

  toggleFormularioAgregar(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  agregarArticulo(): void {
    if (!this.precioError) {
      this.articulosService.addArticulo(this.nuevoArticulo).subscribe(response => {
        this.getArticulos();
        this.nuevoArticulo = { descripcion: '', precio: 0 };
        this.mostrarFormulario = false;
      });
    }
  }

  // Evitar la entrada del signo negativo
  preventNegative(event: KeyboardEvent): void {
    if (event.key === '+' || event.key === 'e') {
      event.preventDefault();
    }
  }

  // Validar si el precio es negativo y mostrar el error
  validatePrecio(): void {
    this.precioError = this.nuevoArticulo.precio < 0;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor (
    private router : Router
  ) {}

  cerrarSesion(): void {
    // Limpiar cualquier dato almacenado en el localStorage
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    // Redirigir al componente de login
    this.router.navigate(['/login']);
  }
}

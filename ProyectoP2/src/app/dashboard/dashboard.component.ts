import { Component, OnInit } from '@angular/core';
import { VentasService } from '../services/ventas.service';
import { MesesService } from '../services/meses.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  ventas: any[] = [];
  meses: any[] = [];
  sucursales: string[] = ['SantaFe', 'Rosario', 'SantoTome', 'Rafaela', 'Parana'];
  sucursalesEliminadas: string[] = [];
  chart: any;
  isAdmin: boolean = false;

  constructor(
    private ventasService: VentasService, 
    private mesesService: MesesService, 
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin(); // Determinar si el usuario es administrador
    this.ventasService.getVentas().subscribe(data => {
      this.ventas = data;
      this.mesesService.getMeses().subscribe(data => {
        this.meses = data;
      });
    });
  }

  updateVenta(index: number): void {
    if (!this.isAdmin) return; // Solo permitir si es Administrador

    const venta = this.ventas[index];
    const id = index + 1;

    this.ventasService.updateVenta(id, venta).subscribe(
      response => {
        console.log('Venta actualizada correctamente', response);
      },
      error => {
        console.error('Error al actualizar la venta', error);
      }
    );
  }

  borrarSucursal(): void {
    if (!this.isAdmin) return; // Solo permitir si es Administrador
    if (this.sucursales.length > 1) {
      const sucursalEliminada = this.sucursales.pop();
      if (sucursalEliminada) {
        this.sucursalesEliminadas.push(sucursalEliminada);
      }
    }
  }

  agregarSucursal(): void {
    if (!this.isAdmin) return; // Solo permitir si es Administrador
    if (this.sucursalesEliminadas.length > 0) {
      const sucursalRestaurada = this.sucursalesEliminadas.pop();
      if (sucursalRestaurada) {
        this.sucursales.push(sucursalRestaurada);
      }
    }
  }
}

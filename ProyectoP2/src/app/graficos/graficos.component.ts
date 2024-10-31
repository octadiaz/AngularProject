import { Component, OnInit } from '@angular/core';
import { VentasService } from '../services/ventas.service';
import { MesesService } from '../services/meses.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent implements OnInit {
  tipoGrafico: string = 'barra';
  sucursales: string[] = ['SantaFe', 'Rosario', 'SantoTome', 'Rafaela', 'Parana'];
  ventas: any[] = [];
  meses: any[] = [];

  constructor(private ventasService: VentasService, private mesesService: MesesService) {}

  ngOnInit(): void {
    this.ventasService.getVentas().subscribe(data => {
      this.ventas = data;
    });

    this.mesesService.getMeses().subscribe(data => {
      this.meses = data;
    });
  }

  mostrarGrafico(tipo: string): void {
    this.tipoGrafico = tipo;
  }

  // Función para formatear los nombres de sucursales
  formatSucursalName(sucursal: string): string {
    const replacements: { [key: string]: string } = {
      'SantaFe': 'Santa Fe',
      'SantoTome': 'Santo Tomé',
      'Parana': 'Paraná'
    };
    return replacements[sucursal] || sucursal;
  }
}

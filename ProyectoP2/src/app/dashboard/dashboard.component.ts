import { Component, OnInit } from '@angular/core';
import { TotalesService } from '../services/totales.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  totalArticulos: number = 0;
  totalClientes: number = 0;
  totalSucursales: number = 0;

  constructor(private TotalesService: TotalesService) {}
  ngOnInit(): void {
    this.TotalesService.getTotalArticulos().subscribe(data => {
      this.totalArticulos = data.total;
    });

    this.TotalesService.getTotalClientes().subscribe(data => {
      this.totalClientes = data.total;
    });

    this.TotalesService.getTotalSucursales().subscribe(data => {
      this.totalSucursales = data.total;
    });
  }

}

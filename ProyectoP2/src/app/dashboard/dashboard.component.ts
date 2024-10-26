import { Component, OnInit } from '@angular/core';
import { VentasService } from '../services/ventas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  ventas: any[] = [];

  constructor(private ventasService: VentasService) {}

  ngOnInit(): void {
    this.ventasService.getVentas().subscribe(data => {
      this.ventas = data;
    });
  }
}

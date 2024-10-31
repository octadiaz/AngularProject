import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../services/sucursales.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrl: './sucursal.component.css'
})
export class SucursalComponent implements OnInit {
  sucursales: any[] = [];

  constructor(private sucursalesService: SucursalesService) {}

  ngOnInit(): void {
    this.sucursalesService.getSucursales().subscribe(data => {
      this.sucursales = data;
    });
  }
}

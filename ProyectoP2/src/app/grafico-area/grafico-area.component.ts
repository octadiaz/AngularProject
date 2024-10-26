import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { MesesService } from '../services/meses.service';
import { VentasService } from '../services/ventas.service';

@Component({
  selector: 'app-grafico-area',
  templateUrl: './grafico-area.component.html',
  styleUrl: './grafico-area.component.css'
})
export class GraficoAreaComponent implements OnInit {
// Atributo que almacena los datos del chart
public chart: any;

constructor(private mesesService: MesesService, private ventasService: VentasService) {}

ngOnInit(): void {
  // Llamadas a los servicios para obtener los meses y las ventas
  this.mesesService.getMeses().subscribe(meses => {
    console.log('Meses:', meses);
    const labels = meses.map((mes: any) => mes.Mes); // Extrae los nombres de los meses

    this.ventasService.getVentas().subscribe(ventas => {
      console.log('Ventas:', ventas);
      // Prepara los datasets basados en las ventas de cada sucursal
      const datasets = [
        {
          label: 'Santa Fe',
          data: ventas.map((venta: any) => venta.SantaFe),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1
        },
        {
          label: 'Rosario',
          data: ventas.map((venta: any) => venta.Rosario),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1
        },
        {
          label: 'Santo Tomé',
          data: ventas.map((venta: any) => venta.SantoTome),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1
        },
        {
          label: 'Rafaela',
          data: ventas.map((venta: any) => venta.Rafaela),
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgb(153, 102, 255)',
          borderWidth: 1
        },
        {
          label: 'Paraná',
          data: ventas.map((venta: any) => venta.Parana),
          backgroundColor: 'rgba(201, 203, 207, 0.2)',
          borderColor: 'rgb(201, 203, 207)',
          borderWidth: 1
        }
      ];

      // Configura los datos para el gráfico
      const data = {
        labels: labels, // Los nombres de los meses
        datasets: datasets // Los datasets de las ventas por sucursal
      };

      // Crea el gráfico
      this.chart = new Chart("chart", {
        type: 'line' as ChartType, // tipo de la gráfica 
        data: data, // datos 
        options: { // opciones de la gráfica 
          scales: {
            y: {
              beginAtZero: true
            }
          },
        },
      });
    });
  });
}
}

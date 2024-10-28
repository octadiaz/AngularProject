import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, Legend } from 'chart.js/auto';
import { MesesService } from '../services/meses.service';
import { VentasService } from '../services/ventas.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-grafico-area',
  templateUrl: './grafico-area.component.html',
  styleUrl: './grafico-area.component.css'
})
export class GraficoAreaComponent implements OnInit {
public chart: any;
isAdmin: boolean = false;

constructor(private mesesService: MesesService, 
  private ventasService: VentasService,
  private authService: AuthService
) {}

ngOnInit(): void {
  this.isAdmin = this.authService.isAdmin();

  this.mesesService.getMeses().subscribe(meses => {
    const labels = meses.map((mes: any) => mes.Mes);

    this.ventasService.getVentas().subscribe(ventas => {
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

      const data = {
        labels: labels, 
        datasets: datasets 
      };

      
      this.chart = new Chart("chart", {
        type: 'line' as ChartType,
        data: data, 
        options: { 
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              onClick: (e,legendItem, legend) => {
                if (this.isAdmin) {
                  Chart.defaults.plugins.legend.onClick.call(legend, e, legendItem, legend);
                }
              }
            }
          }
        },
      });
    });
  });
}
}

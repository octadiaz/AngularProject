import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private apiUrl = '/backend'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener las ventas
  getVentas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getVentas.php`);
  }

  // Método para actualizar una venta
  updateVenta(index: number, venta: any): Observable<any> {
    // Envía el índice de la fila y los datos de la venta al backend para actualizarla
    return this.http.put<any>(`${this.apiUrl}/updateVentas.php`, { index, venta });
  }
}

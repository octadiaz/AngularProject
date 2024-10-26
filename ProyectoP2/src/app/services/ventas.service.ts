import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private apiUrl = '/backend/getVentas.php';

 // URL del archivo PHP que obtiene las ventas

  constructor(private http: HttpClient) {}

  // Método para obtener las ventas
  getVentas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

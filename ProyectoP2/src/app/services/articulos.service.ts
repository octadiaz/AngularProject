import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private apiUrl = 'http://localhost:5000/backend/getArticulos.php'; // Ajusta esta URL según tu configuración
  private addArticuloUrl = 'http://localhost:5000/backend/addArticulo.php'; // Nueva URL para agregar artículos

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para agregar un nuevo artículo
  addArticulo(articulo: any): Observable<any> {
    return this.http.post<any>(this.addArticuloUrl, articulo);
  }
}

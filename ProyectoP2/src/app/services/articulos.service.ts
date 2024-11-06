import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private apiUrl = 'http://localhost:5000/backend/getArticulos.php'; // Ajusta esta URL según tu configuración

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

// sucursales.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  private apiUrl = 'http://localhost:5000/backend/getSucursales.php'; // Cambia esta URL según sea necesario

  constructor(private http: HttpClient) {}

  getSucursales(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

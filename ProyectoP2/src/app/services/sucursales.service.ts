// sucursales.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  private apiUrl = 'https://integrador-programacion2.vercel.app/backend/getSucursales.php';

  private apiUrl1 = 'http://localhost:5000/backend/getSucursales.php'; // Cambia esta URL según sea necesario

  constructor(private http: HttpClient) {}

  getSucursales(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

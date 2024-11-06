import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalesService {
  private apiUrl = 'http://localhost:5000/backend';

  constructor(private http: HttpClient) { }
  
  getTotalArticulos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getTotalArticulos.php`);
  }

  getTotalClientes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getTotalClientes.php`);
  }

  getTotalSucursales(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getTotalSucursales.php`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:5000/backend/getClientes.php'; // Cambia esta URL según sea necesario

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

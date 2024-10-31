import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'https://integrador-programacion2.vercel.app/backend/getClientes.php';

  private apiUrl1 = 'http://localhost:5000/backend/getClientes.php'; // Cambia esta URL según sea necesario

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

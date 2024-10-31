import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesesService {
  private apiUrl = 'https://integrador-programacion2.vercel.app/backend/getMeses.php';

  private apiUrl1 = '/backend/getMeses.php'; // URL del archivo PHP que obtiene los meses

  constructor(private http: HttpClient) {}

  // Método para obtener los meses
  getMeses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

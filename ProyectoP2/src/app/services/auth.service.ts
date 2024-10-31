import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/backend/login.php';
  private userRole: string | null = null;

  constructor(private http: HttpClient) {}

  // Método para hacer login
  login(usuario: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { usuario, password });
  }

  // Método para almacenar el rol después del login exitoso
  setRole(rol: string): void {
    this.userRole = rol;
    localStorage.setItem('userRole', rol);
  }

  // Método para obtener el rol almacenado
  getRole(): string | null {
    this.userRole = this.userRole || localStorage.getItem('userRole');
    return this.userRole;
  }

  // Método para verificar si el usuario es Administrador
  isAdmin(): boolean {
    const role = this.getRole();
    return role === 'Administrador';
  }

  // Método para cerrar sesión y limpiar el almacenamiento
  logout(): void {
    this.userRole = null;
    localStorage.removeItem('userRole');
  }
}

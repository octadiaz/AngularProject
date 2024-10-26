import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Importar el servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private authService: AuthService // Inyectar el servicio de autenticación
  ) {}

  login() {
    const loginData = {
      usuario: this.usuario,
      password: this.password,
    };

    this.http.post('http://localhost:5000/backend/login.php', loginData)
      .subscribe(
        (response: any) => {
          if (response.status) {
            // Almacenar el rol utilizando AuthService
            this.authService.setRole(response.rol);
            alert('Login exitoso');
            this.router.navigate(['/dashboard']); // Redirigir al dashboard en caso de éxito
          } else {
            alert(response.message);
          }
        },
        (error) => {
          alert('Error: ' + error.error.message);
        }
      );
  }
}

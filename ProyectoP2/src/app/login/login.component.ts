import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  errorMessage: string = '';
  isUserError: boolean = false;
  isPasswordError: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    this.resetErrors(); // Limpiar errores previos

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

            // Redirigir a la pantalla de carga
            this.router.navigate(['/loading']);

            // Después de un tiempo, redirigir al dashboard
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 2000); // Ajusta el tiempo según lo necesites
          } else {
            this.handleError(response);
          }
        },
        (error) => {
          this.errorMessage = 'Error de conexión con el servidor';
        }
      );
  }

  handleError(response: any) {
    this.errorMessage = response.message;

    // Marcar errores específicos
    if (response.errorType === 'user') {
      this.isUserError = true;
    } else if (response.errorType === 'password') {
      this.isPasswordError = true;
    } else if (response.errorType === 'fields') {
      this.isUserError = true;
      this.isPasswordError = true;
    }
  }

  resetErrors() {
    this.errorMessage = '';
    this.isUserError = false;
    this.isPasswordError = false;
  }
}

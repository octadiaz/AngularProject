import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = {
      usuario: this.usuario,
      password: this.password,
    };

    this.http.post('http://localhost/backend/login.php', loginData)
      .subscribe(
        (response: any) => {
          if (response.status) {
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

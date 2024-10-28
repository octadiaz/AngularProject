import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AFK S.A';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Verifica si la ruta actual es la de login
      this.showNavbar = !this.router.url.includes('/login') && !this.router.url.includes('/loading');
    });
  }
}

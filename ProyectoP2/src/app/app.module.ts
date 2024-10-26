import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añade FormsModule para trabajar con ngModel en formularios
    HttpClientModule // Añade HttpClientModule para hacer peticiones HTTP
  ],
  providers: [
    provideClientHydration() // Proveedor para soporte de hidratación en SSR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


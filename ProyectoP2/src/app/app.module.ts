import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';
import { GraficoAreaComponent } from './grafico-area/grafico-area.component';
import { GraficoBarraApiladaComponent } from './grafico-barra-apilada/grafico-barra-apilada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SucursalComponent,
    GraficoBarraComponent,
    GraficoAreaComponent,
    GraficoBarraApiladaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Añade NgChartsModule aquí
  ],
  providers: [
    provideClientHydration() // Proveedor para soporte de hidratación en SSR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// Importa el componente DashboardComponent si ya lo tienes creado
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingComponent } from './loading/loading.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VentaComponent } from './venta/venta.component';
import { GraficosComponent } from './graficos/graficos.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirigir al dashboard por defecto
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sucursales', component: SucursalComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'ventas', component: VentaComponent },
  { path: 'graficos', component: GraficosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

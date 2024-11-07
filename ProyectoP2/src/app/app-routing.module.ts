import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingComponent } from './loading/loading.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VentaComponent } from './venta/venta.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ArticulosComponent } from './articulos/articulos.component';

const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sucursales', component: SucursalComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'ventas', component: VentaComponent },
  { path: 'graficos', component: GraficosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

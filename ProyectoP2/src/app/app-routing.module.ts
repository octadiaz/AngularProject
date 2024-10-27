import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// Importa el componente DashboardComponent si ya lo tienes creado
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';
import { GraficoAreaComponent } from './grafico-area/grafico-area.component';
import { GraficoBarraApiladaComponent } from './grafico-barra-apilada/grafico-barra-apilada.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirigir al dashboard por defecto
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'barra', component: GraficoBarraComponent },
  { path: 'barraApi', component: GraficoBarraApiladaComponent },
  { path: 'area', component: GraficoAreaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

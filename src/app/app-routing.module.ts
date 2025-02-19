import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home/home.component';
import { MemberDashboardComponent } from './Memberdashboard/member-dashboard/member-dashboard.component';
import { DahsboardComponent } from './admin/dahsboard/dahsboard.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { NotficationsComponent } from './admin/notfications/notfications.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin/dashboard', component: DahsboardComponent }, // Corrigez le chemin ici
  { path: 'member-dashboard', component: MemberDashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminproduits', component: ProduitsComponent },
  { path: 'notif', component: NotficationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

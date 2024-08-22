import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home/home.component';
import { AdminDashboardComponent } from './Admindashboard/admin-dashboard/admin-dashboard.component';
import { MemberDashboardComponent } from './Memberdashboard/member-dashboard/member-dashboard.component';

const routes: Routes = [ { path: 'login', component: LoginComponent },{ path: 'admin-dashboard', component: AdminDashboardComponent },{ path: 'member-dashboard', component: MemberDashboardComponent },{ path: 'home', component: HomeComponent },{ path: 'register', component:RegisterComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

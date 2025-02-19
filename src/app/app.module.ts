import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './token-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { MemberDashboardComponent } from './Memberdashboard/member-dashboard/member-dashboard.component';
import { DahsboardComponent } from './admin/dahsboard/dahsboard.component';
import { ProduitsComponent } from './admin/produits/produits.component';
import { AddEditProduitsComponent } from './admin/produits/add-edit-produits/add-edit-produits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NotficationsComponent } from './admin/notfications/notfications.component';
import { NavbarComponent } from './admin/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,

    MemberDashboardComponent,
    DahsboardComponent,
    ProduitsComponent,
    AddEditProduitsComponent,
    NotficationsComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,MatSidenavModule,MatSnackBarModule,MatDialogModule,MatSidenavModule,
    AppRoutingModule,HttpClientModule,  NgbModalModule, FormsModule,MatIconModule,
    ReactiveFormsModule,JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['*'], // Replace with your domain
        disallowedRoutes: [] // Replace with your API URL
      }
    }), BrowserAnimationsModule
  ],
  
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

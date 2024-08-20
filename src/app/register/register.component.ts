import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from '../models/register-request';
import { Role } from '../models/role';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerRequest: RegisterRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: Role.ROLE_ADMIN,
    location: '',
    phone: '',
    profileImage: '' // Ce champ n'est plus nécessaire ici, on utilise FormData
  };
  selectedFile: File | null = null;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  register() {
    const formData = new FormData();
    formData.append('request', new Blob([JSON.stringify({
      firstname: this.registerRequest.firstname,
      lastname: this.registerRequest.lastname,
      email: this.registerRequest.email,
      password: this.registerRequest.password,
      phone: this.registerRequest.phone,
      location: this.registerRequest.location,
      role: this.registerRequest.role
    })], { type: 'application/json' }));
    
    if (this.selectedFile) {
      formData.append('imageFile', this.selectedFile);
    }

    this.authService.register(formData).subscribe(
      (response: any) => {
        console.log('Registration successful', response);
        // Redirection ou action après une inscription réussie
        this.router.navigate(['/login']); // Exemple de redirection vers la page de connexion
      },
      (error: any) => {
        console.error('Registration failed', error);
      }
    );
  }
}

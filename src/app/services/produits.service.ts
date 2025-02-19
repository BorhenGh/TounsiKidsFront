import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Produits } from '../models/Prduits';
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private apiRoot = 'http://localhost:8080/api/v1/product/';

  constructor(private http: HttpClient, private authService: AuthService) {}
  
  getAllProduits(): Observable<Produits[]> {
    return this.http.get<Produits[]>(`${this.apiRoot}all`);
  }

  getProduitsById(id: number): Observable<Produits> {
    return this.http.get<Produits>(`${this.apiRoot}/${id}`);
  }

  createProduits(Produits: Produits, imageFile: File): Observable<Produits> {
    const formData: FormData = new FormData();
    formData.append('Produits', JSON.stringify(Produits));
    formData.append('image', imageFile);

    return this.http.post<Produits>(`${this.apiRoot}/create`, formData);
  }

  updateProduits(id: number, Produits: Produits, imageFile?: File): Observable<Produits> {
    const formData: FormData = new FormData();
    formData.append('Produits', JSON.stringify(Produits));
    if (imageFile) {
      formData.append('image', imageFile);
    }

    return this.http.put<Produits>(`${this.apiRoot}/${id}`, formData);
  }

  deleteProduits(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiRoot}/${id}`);
  }

}

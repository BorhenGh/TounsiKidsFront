import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/models/Prduits';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as alertifyjs from 'alertifyjs';
import { AddEditProduitsComponent } from './add-edit-produits/add-edit-produits.component';
import { ProduitsService } from 'src/app/services/produits.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  id_user: any;

  constructor(private snackBar: MatSnackBar,private dialog:MatDialog,private router : Router,private http: HttpClient, private jwtHelper: JwtHelperService,private produitservice:ProduitsService) { }
  sideBarOpen = true;
  products: Produits[] | undefined;
  editmode:boolean=false;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.id_user = user.id;
    }
    this.AllProduits();
  }
  AllProduits(){
    this.produitservice.getAllProduits().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error('Erreur lors du chargement des products :', error);
      }
    );
  }
    
  add(){
    this.editmode=false;
    this.OpenDialog('1000ms','600ms','')


  }

  update(id:any){
    this.editmode=true;
   this.OpenDialog('1000ms','600ms',id)

   

  }
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditProduitsComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
          id:id,
           editmo:this.editmode,
   
         } })
   
        }



        supprimer(id:any){
    

          alertifyjs.confirm("Supprimer L'offre'","Voulez vous supprimer l'offre ?",()=>{ this.produitservice.deleteProduits(id).subscribe(()=>{
     
           this.showSuccessMessage();
          })
        
          },function(){
        
          })
         
        }
        showSuccessMessage() {
          const config = new MatSnackBarConfig();
          config.duration = 3000; // Duration in milliseconds
          config.horizontalPosition = 'center'; // Set the horizontal position to center
          config.verticalPosition = 'top'; // Set the vertical position to top
        
          this.snackBar.open('Delete succeeded!', 'Close', config);
        }
        
        showFailMessage() {
          
          const config = new MatSnackBarConfig();
          config.duration = 3000; // Duration in milliseconds
          config.horizontalPosition = 'center'; // Set the horizontal position to center
          config.verticalPosition = 'top'; // Set the vertical position to top
        
          this.snackBar.open('Delete failed!', 'Close', config);
        }     
  

}

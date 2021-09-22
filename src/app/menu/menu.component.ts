import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentUser:Usuario = {
    id:null,
    nombre:null,
    apellido:null,
    direccion:null,
    telefono:null,
    mail:null,
    password:null,
    token:null
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.readLocalStorage();
  }

  // --- Selection Login
  loginId:number;
  login(data:number) {
    this.loginId = data;  
    this.openModal();
  }

  // --- Modal Function 
  modalVisible = false;      
  openModal() {
    this.modalVisible = true;
  }

  // --- Trae datos del local storage para usarlo en el navbar
  userActive=false;
  readLocalStorage(){    
    if(localStorage.getItem('currentUser') != null) {
      this.userActive=true; // para distintas opciones según si un usuario se ha logueado o no
      this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  cerrarSesion(){
    localStorage.removeItem('currentUser');    
    location.reload();
    //this.router.navigate(['/']);
  }

}

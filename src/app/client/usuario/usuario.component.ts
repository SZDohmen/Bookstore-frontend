import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
  })
  export class UsuarioComponent implements OnInit {

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

    ngOnInit(): void {
        this.readLocalStorage();
    }

    readLocalStorage(){    
        if(localStorage.getItem('currentUser') != null) {
            this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
        }
    }
}
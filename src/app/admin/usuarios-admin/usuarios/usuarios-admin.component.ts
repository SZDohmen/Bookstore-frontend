import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.css']
})
export class UsuariosAdmin {
  
  usuarios: Usuario[] = [];

    filtro = '';
    usuarioId:number;
    modal = false; 

    constructor(
        private service: UsuarioService,
        private router: Router
    ) { }  

    ngOnInit(): void {
        this.getAll();
    }

    // --- CRUD Method - GetAll
    getAll() {
        this.service.getAll().subscribe(data => {
          this.usuarios = data;
          console.log(this.usuarios);
        });
    }
    
    // --- Get ID from selected usuario    
    detail(id:number){
        console.log(id);
        this.usuarioId=id;
        this.modal=true;
    }    

    // --- Modal Function       
    openModal() {
        this.modal = true;
    }

}

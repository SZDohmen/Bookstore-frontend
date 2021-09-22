import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from "@angular/router";

@Component({
  selector: 'catalogo-admin',
  templateUrl: './catalogo-admin.component.html',
  styleUrls: ['./catalogo-admin.component.css']
})
export class CatalogoAdmin {
  
  libros: Libro[] = [];

    filtro = '';
    libroId:number;
    modal = false; 

    constructor(
        private service: LibroService,
        private router: Router
    ) { }  

    ngOnInit(): void {
        this.getAll();
    }

    // --- CRUD Method - GetAll
    getAll() {
        this.service.getAll().subscribe(data => {
          this.libros = data;
          console.log(this.libros);
        });
    }
    
    // --- Get ID from selected Libro    
    detail(id:number){
        console.log(id);
        this.libroId=id;
        this.modal=true;
    }    

    // --- Modal Function       
    openModal() {
        this.modal = true;
    }
}

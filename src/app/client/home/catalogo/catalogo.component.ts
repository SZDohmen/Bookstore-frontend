import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Libro } from "src/app/models/libro";
import { LibroService } from "src/app/services/libro.service";

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.component.html',
    styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

    libros: Libro[] = [];

    filtro = '';
    libroId:number;
    modal = false; 

    constructor(
        private service: LibroService
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
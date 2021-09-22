import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Noticia } from "src/app/models/noticia";
import { NoticiaService } from "src/app/services/noticia.service";

@Component({
    selector: 'app-informes',
    templateUrl: './informes.component.html',
    styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

    noticias: Noticia[] = [];

    filtro = '';
    noticiaId:number;
    modal = false; 

    constructor(
        private service: NoticiaService,
        private router: Router
    ) { }  

    ngOnInit(): void {
        this.getAll();
    }

    // --- CRUD Method - GetAll
    getAll() {
        this.service.getAll().subscribe(data => {
          this.noticias = data;
          console.log(this.noticias);
        });
    }
    
    // --- Get ID from selected Libro    
    detail(id:number){
        console.log(id);
        this.noticiaId=id;
        this.modal=true;
    }    

    // --- Modal Function       
    openModal() {
        this.modal = true;
    }
}
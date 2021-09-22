import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable( {providedIn:'root'} )

export class NoticiaService {
    noticia: Noticia = new Noticia();
    url='http://localhost:8080/api/bookstore/admin/informes/';

    constructor(private http:HttpClient){}

    getAll():Observable<Noticia[]> {
        return this.http.get<Noticia[]>(this.url);
    }

    getOne(id:number):Observable<Noticia> {
        return this.http.get<Noticia>(this.url+id);
    }

    save(noticia:Noticia):Observable<Noticia> {
        return this.http.post<Noticia>(this.url, noticia);
    }

    update(id:number, noticia:Noticia):Observable<Noticia> {
        return this.http.put<Noticia>(this.url+id, noticia);
    }

    delete(id:number):Observable<Noticia> {
        return this.http.delete<Noticia>(this.url+id);
    }
}

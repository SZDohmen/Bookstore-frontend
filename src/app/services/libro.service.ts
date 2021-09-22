import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable( {providedIn:'root'} )

export class LibroService {
    libro: Libro = new Libro();
    url='http://localhost:8080/api/bookstore/admin/catalogo/';

    constructor(private http:HttpClient){}

    getAll():Observable<Libro[]> {
        return this.http.get<Libro[]>(this.url);
    }

    getOne(id:number):Observable<Libro> {
        return this.http.get<Libro>(this.url+id);
    }

    save(libro:Libro):Observable<Libro> {
        return this.http.post<Libro>(this.url, libro);
    }

    update(id:number, libro:Libro):Observable<Libro> {
        return this.http.put<Libro>(this.url+id, libro);
    }

    delete(id:number):Observable<Libro> {
        return this.http.delete<Libro>(this.url+id);
    }
}

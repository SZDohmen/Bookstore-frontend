import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable( {providedIn:'root'} )

export class UsuarioService {
    usuario: Usuario = new Usuario();
    url='http://localhost:8080/api/bookstore/admin/usuarios/';

    constructor(private http:HttpClient){}
    
    getAll():Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.url);
    }

    getOne(id:number):Observable<Usuario> {
        return this.http.get<Usuario>(this.url+id);
    }

    getByMail(mail:string):Observable<Usuario> {
        return this.http.get<Usuario>(`${this.url}mail/`+mail);
    }

    save(usuario:Usuario):Observable<Usuario> {
        return this.http.post<Usuario>(this.url, usuario);
    }

    update(id:number, usuario:Usuario):Observable<Usuario> {
        return this.http.put<Usuario>(this.url+id, usuario);
    }

    delete(id:number):Observable<Usuario> {
        return this.http.delete<Usuario>(this.url+id);
    }
}

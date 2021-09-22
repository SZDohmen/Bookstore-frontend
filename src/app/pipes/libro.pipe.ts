import { Pipe, PipeTransform } from '@angular/core';
import { Libro } from '../models/libro';

@Pipe( {name: 'libroFilter'} )
export class LibroPipe implements PipeTransform {
    transform(libro: Libro[], texto: string): Libro[] {

        if (texto.length === 0) {
            return libro;
        }
        texto = texto.toLocaleLowerCase();
        return libro.filter(
            libro => {
                return (libro.titulo.toLocaleLowerCase().includes(texto)
                    || libro.autor.toLocaleLowerCase().includes(texto));
            }
        );
    }
}

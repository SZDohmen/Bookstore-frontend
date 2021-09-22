import { Pipe, PipeTransform } from '@angular/core';
import { Noticia } from '../models/noticia';

@Pipe( {name: 'noticiaFilter'} )
export class NoticiaPipe implements PipeTransform {
    transform(noticia: Noticia[], texto: string): Noticia[] {

        if (texto.length === 0) {
            return noticia;
        }
        texto = texto.toLocaleLowerCase();
        return noticia.filter(
            noticia => {
                return (noticia.titulo.toLocaleLowerCase().includes(texto)
                    || noticia.descripcion.toLocaleLowerCase().includes(texto));
            }
        );
    }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario';

@Pipe( {name: 'usuarioFilter'} )
export class UsuarioPipe implements PipeTransform {
    transform(usuario: Usuario[], texto: string): Usuario[] {

        if (texto.length === 0) {
            return usuario;
        }
        texto = texto.toLocaleLowerCase();
        return usuario.filter(
            usuario => {
                return (usuario.nombre.toLocaleLowerCase().includes(texto)
                    || usuario.apellido.toLocaleLowerCase().includes(texto)
                    || usuario.mail.toLocaleLowerCase().includes(texto));
            }
        );
    }
}

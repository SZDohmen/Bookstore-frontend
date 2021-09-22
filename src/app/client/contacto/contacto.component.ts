import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {

    contactoId: number;
    modal = false;

    descripcion='Somos una editorial fundada en 1935, con la intención de suministrar literatura de calidad a precios tan asequibles como, en la época, un paquete de cigarrillos, y que fueran vendidos no solo en librerías, sino también en estaciones ferroviarias y en tiendas en general. Sus productos más emblemáticos son sus libros de bolsillo, publicados por primera vez en el año de fundación de la empresa, aunque inicialmente solo como un sello editorial.';
    direccion='Av. San Martin - Ciudad';
    horario='Lunes a viernes de 9.30 a 18.30hs. Sábados de 9 a 13hs.';
    telefono='011 1234-5678';
    mail='info@bookstore.com.ar';

    ngOnInit(): void { }

    // --- Modal Function       
    openModal() {
        this.modal = true;
    }
}
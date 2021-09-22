import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Libro } from "src/app/models/libro";
import { LibroService } from "src/app/services/libro.service";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  formulario: FormGroup;

  libro: Libro = {
    id: null,
    titulo: null,
    autor: null,
    imagen: null,
    descripcion: null,
    precio: 0.0
  }

  @Input() libroId: number;

  @Input() visible: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private service: LibroService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validations();
    this.getOne(this.libroId);
  }

  // --- CRUD Method - GetOne
  getOne(id: number) {
    if(id != 0) {
      this.service.getOne(id).subscribe(data => {
        this.libro = data;
      });
    }    
  }

  // --- CRUD Method - Save & Update
  detail() {
    (this.libroId === 0) ? this.save() : this.update(this.libroId);
  }

  save() {
    this.service.save(this.libro).subscribe(data => {
      console.log(data);
      this.libro = data;
    });
    alert('Nuevo libro agregado');
    this.closeModal();
  }

  update(id:number) {
    this.service.update(id, this.libro).subscribe(data => {
      this.libro = data;
    });
    alert('Datos actualizados');
    this.closeModal();
  }

  // --- CRUD Method - Delete
  delete(id:number) {
    const opcion = confirm('¿Eliminar registro?');
    if (opcion === true) {
      this.service.delete(id).subscribe(data => { });
    }
    alert('Registro eliminado');
    this.closeModal();
  }

  // --- Modal Function
  closeModal() {
    this.close.emit(false);
    location.reload();
  }

  // --- Validations
  validations() {
    this.formulario = this.formBuilder.group({
      precio: ['', Validators.compose(
        [Validators.required, Validators.pattern('[0-9]*')]
      )],
    });
  }

}
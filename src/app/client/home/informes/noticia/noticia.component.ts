import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Noticia } from "src/app/models/noticia";
import { NoticiaService } from "src/app/services/noticia.service";

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticia: Noticia = {
    id: null,
    titulo: null,
    imagen: null,
    descripcion: null,
  }

  @Input() noticiaId: number;

  @Input() visible: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  formulario: FormGroup;

  constructor(
    private service: NoticiaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validations();
    this.getOne(this.noticiaId);
  }

  // --- CRUD Method - GetOne
  getOne(id: number) {
    this.service.getOne(id).subscribe(data => {
      this.noticia = data;
    });
  }

  // --- CRUD Method - Save & Update
  detail() {
    (this.noticiaId === 0) ? this.save() : this.update(this.noticiaId);
  }

  save() {
    this.service.save(this.noticia).subscribe(data => {
      console.log(data);
      this.noticia = data;
    });
    alert('Nueva noticia agregado');
    this.closeModal();
  }

  update(id: number) {
    this.service.update(id, this.noticia).subscribe(data => {
      this.noticia = data;
    });
    alert('Datos actualizados');
    this.closeModal();
  }

  // --- CRUD Method - Delete
  delete(id: number) {
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
      texto: ["", Validators.compose(
        [Validators.required, Validators.pattern('.[0-9a-zA-Z ]*')]
      )],
      numero: ["", Validators.compose(
        [Validators.required, Validators.pattern('[0-9]*')]
      )]
    });
  }


}
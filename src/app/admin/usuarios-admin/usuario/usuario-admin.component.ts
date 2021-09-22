import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "src/app/services/usuario.service"; 

@Component({
  selector: 'usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.css']
})
export class UsuarioAdmin {
  formulario: FormGroup;

  usuario: Usuario = {
    id: null,
    nombre: null,
    apellido: null,
    direccion: null,
    telefono: null,
    mail: null,
    password: null,
    token:null
  }

  @Input() usuarioId: number;

  @Input() visible: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private service: UsuarioService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validations();
    this.getOne(this.usuarioId);
  }

  // --- CRUD Method - GetOne
  getOne(id: number) {
    if (id != 0) {
      this.service.getOne(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }

  // --- CRUD Method - Save & Update
  detail() {
    (this.usuarioId === 0) ? this.save() : this.update(this.usuarioId);
  }

  save() {
    this.service.save(this.usuario).subscribe(data => {
      console.log(data);
      this.usuario = data;
    });
    alert('Nuevo usuario agregado');
    this.closeModal();
  }

  update(id: number) {
    this.service.update(id, this.usuario).subscribe(data => {
      this.usuario = data;
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
      correo: ['', Validators.compose(
        [Validators.required, Validators.email]
      )],
    });
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: UsuarioService
  ) { }

  // variables para modal
  @Input() modalVisible: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // función modal - cerrar modal
  closeModal() {
    this.close.emit(false);
    location.reload();
  }
  
  // validaciones -> campos input requeridos para habilitar ingreso a metodo onLogin
  loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  // validación -> logueo para usuario y su contraseña  
  mailExist:boolean;
  passOk:boolean;
  onLogin(form) {
    this.mailExist=true;
    this.passOk=true;
    this.service.getByMail(form.mail).subscribe(data => {

      // verificar si contraseña y usuario son los correctos
      if ((data.password === form.password) && (data.mail === form.mail)) {

        // guarda datos obtenidos del service en localstorage
        localStorage.setItem('currentUser', JSON.stringify(data));  
        this.mailExist=true;
        this.passOk=true;
        location.reload();

      } else { // en caso de contraseña incorrecta
        this.passOk=false;
      }
    }, error => {
      // en caso de que el mail no esté registrado en la base de datos
      console.log(error.error);
      this.mailExist=false;
    });
  }

  ngOnInit(): void {
  }
  
}

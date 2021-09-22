import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  })
  export class SignupComponent implements OnInit {

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

    // validaciones
    signupForm = new FormGroup({
        nombre: new FormControl('', Validators.required),
        apellido: new FormControl('', Validators.required),
        mail: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });    

    // validaciones
    onSignup(form) {

    }


    ngOnInit(): void { }
    
}
  
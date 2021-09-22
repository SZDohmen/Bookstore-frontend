import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './client/usuario/login/login.component';
import { SignupComponent } from './client/usuario/signup/signup.component';

import { ContactoComponent } from './client/contacto/contacto.component';
import { UsuarioComponent } from './client/usuario/usuario.component';

import { HomeComponent } from './client/home/home.component';
import { InformesComponent } from './client/home/informes/informes.component';
import { NoticiaComponent } from './client/home/informes/noticia/noticia.component'; 
import { CatalogoComponent } from './client/home/catalogo/catalogo.component';
import { LibroComponent } from './client/home/catalogo/libro/libro.component';

// Pipes
import { LibroPipe } from './pipes/libro.pipe';
import { NoticiaPipe } from './pipes/noticia.pipe';
import { UsuarioPipe } from './pipes/usuario.pipe';

// Services
import { LibroService } from './services/libro.service';
import { NoticiaService } from './services/noticia.service';
import { UsuarioService } from './services/usuario.service';

// Admin
import { InformesAdmin } from './admin/informes-admin/informes/informes-admin.component'; 
import { NoticiaAdmin } from './admin/informes-admin/noticia/noticia-admin.component';
import { CatalogoAdmin } from './admin/catalogo-admin/catalogo/catalogo-admin.component'; 
import { LibroAdmin } from './admin/catalogo-admin/libro/libro-admin.component'; 
import { UsuariosAdmin } from './admin/usuarios-admin/usuarios/usuarios-admin.component'; 
import { UsuarioAdmin } from './admin/usuarios-admin/usuario/usuario-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent, LoginComponent, SignupComponent,
    UsuarioComponent,
    ContactoComponent,
    LibroPipe, NoticiaPipe, UsuarioPipe,
    HomeComponent, InformesComponent, NoticiaComponent, CatalogoComponent, LibroComponent,
    InformesAdmin, NoticiaAdmin, CatalogoAdmin, LibroAdmin, UsuariosAdmin, UsuarioAdmin

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LibroService,
    NoticiaService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './client/contacto/contacto.component';
import { HomeComponent } from './client/home/home.component';
import { UsuarioComponent } from './client/usuario/usuario.component';
import { InformesAdmin } from './admin/informes-admin/informes/informes-admin.component';
import { CatalogoAdmin } from './admin/catalogo-admin/catalogo/catalogo-admin.component'; 
import { UsuariosAdmin } from './admin/usuarios-admin/usuarios/usuarios-admin.component'; 

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'contacto', component: ContactoComponent },
  { path:'usuario', component: UsuarioComponent },
  
  { path:'informes/admin', component: InformesAdmin },
  { path:'catalogo/admin', component: CatalogoAdmin },
  { path:'usuarios/admin', component: UsuariosAdmin },

  { path:'*', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

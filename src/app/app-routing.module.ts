import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EpecialistaComponent } from './epecialista/epecialista.component';
import { RegistroComponent } from './registro/registro.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TiporutinaComponent } from './tiporutina/tiporutina.component';
<<<<<<< HEAD
import {EditComponent} from "./edit/edit.component";
=======
import { AsistenteComponent } from './asistente/asistente.component';
>>>>>>> b3f374bbcb66e0e2b50323be636697c0fecc9d3d
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'catalogo',component: CatalogoComponent},
  {path: 'especialista',component: EpecialistaComponent},
  {path: 'registro',component: RegistroComponent},
  {path: 'rutinas',component: RutinasComponent},
  {path: 'perfil',component: PerfilComponent},
  {path: 'tiporutina',component: TiporutinaComponent},
<<<<<<< HEAD
  {path: 'edit',component: EditComponent},
=======
  {path: 'asistente',component: AsistenteComponent},

>>>>>>> b3f374bbcb66e0e2b50323be636697c0fecc9d3d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

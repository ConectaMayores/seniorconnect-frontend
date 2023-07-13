import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EpecialistaComponent } from './epecialista/epecialista.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { TiporutinaComponent } from './tiporutina/tiporutina.component';
<<<<<<< HEAD
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ListaUsuariosComponent } from './registro/lista-usuarios/lista-usuarios.component';
import { EditComponent } from './edit/edit.component';

=======
import { AsistenteComponent } from './asistente/asistente.component';
>>>>>>> b3f374bbcb66e0e2b50323be636697c0fecc9d3d

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    CatalogoComponent,
    PerfilComponent,
    EpecialistaComponent,
    RutinasComponent,
    TiporutinaComponent,
<<<<<<< HEAD
    ListaUsuariosComponent,
    EditComponent
=======
    AsistenteComponent
>>>>>>> b3f374bbcb66e0e2b50323be636697c0fecc9d3d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

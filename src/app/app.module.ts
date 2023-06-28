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
import { AsistenteComponent } from './asistente/asistente.component';

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
    AsistenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

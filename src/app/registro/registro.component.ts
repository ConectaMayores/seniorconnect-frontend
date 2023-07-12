import { Component } from '@angular/core';
import { Usuario} from "../interfaces/registrar.interface";
import {RegistrarService} from "../service/registrar.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: Usuario = {idUsuario: 0, nombreUsuario: '', clave: '', }


  constructor(private registrarService: RegistrarService) {
    this.submitUsuario();
  }

  submitUsuario(): void {
    // Asignar el donante y el caso seleccionado a la donación
    this.usuario = this.usuario;

    // Llamar al servicio para guardar la donación
    this.registrarService.crearUsuario(this.usuario).subscribe(
      (RegistroResponse) => {
        console.log('Registro Exisitoso:', RegistroResponse);
      },
      (error) => {
        console.error('Error al crear el Usuario:', error);
        // Manejar el error de forma adecuada
      }
    )
  }
}








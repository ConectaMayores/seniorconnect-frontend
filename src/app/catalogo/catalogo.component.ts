<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',

  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  especialistas = [
    { nombre: 'Jose Montolla', tipo: 'Especialista' },
    { nombre: 'Maria Fernanda', tipo: 'Especialista' },
    { nombre: 'Fatima Camus', tipo: 'Especialista' }
  ];
  asistentes = [
    { nombre: 'Jean Paul', tipo: 'Asistente' },
    { nombre: 'Allison Yesenia', tipo: 'Asistente' },
    { nombre: 'Shwila Elina', tipo: 'Asistente' }
  ];
  resultadosEspecialistas = this.especialistas;
  resultadosAsistentes = this.asistentes;

  buscar(texto: string): void {
    this.resultadosEspecialistas = this.especialistas.filter((especialista) =>
      especialista.nombre.toLowerCase().includes(texto.toLowerCase())
    );
    this.resultadosAsistentes = this.asistentes.filter((asistente) =>
      asistente.nombre.toLowerCase().includes(texto.toLowerCase())
    );
  }

  ngOnInit(): void {}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

>>>>>>> b3f374bbcb66e0e2b50323be636697c0fecc9d3d
}

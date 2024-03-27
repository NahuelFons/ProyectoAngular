import { Component } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent {

  entregado = true;
  aprobado = true;
  alternarCalificacion(student: any) {
    student.aprobado = !student.aprobado;
}
  
  students = [
    {nombre: 'Alejandro', apellido: 'Garcia', entregado: true, aprobado: true},
    {nombre: 'Sofia', apellido: 'Rodriguez', entregado: true, aprobado: false},
    {nombre: 'Diego', apellido: 'Martinez', entregado: false, aprobado: false},
    {nombre: 'Valentina', apellido: 'Lopez', entregado: false, aprobado: false},
    {nombre: 'Santiago', apellido: 'Hernandez', entregado: true, aprobado: false}
  ];

  entregaLimite = new Date (2024, 3, 27);
}
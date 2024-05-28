import { Injectable } from '@angular/core';
import { iStep } from './istep.interface';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
    public steps: iStep[] = [
       {
      title: 'Dedica muchas horas',
      description: 'Al menos 30 horas a la semana. Si no tienes suficiente, tendrás que dedicarle más horas. Al principio parece imposible, pero notarás una mejoría rápidamente.',
      img: 'assets/time_managment.svg',
      bgcolor: '#ffffff'
    },
    {
      title: 'Programa proyectos propios',
      description: 'Más vale 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudará a acelerar tu aprendizaje.',
      img: 'assets/programming.svg',
      bgcolor: '#eeeeee'
    },
    {
      title: 'Procura descansar',
      description: 'Descansar bien y desconectar son vitales. De esta forma reducirás el estrés y la ansiedad. Mejorarás tu concentración y afianzarás tu aprendizaje.',
      img: 'assets/meditation.svg',
      bgcolor: '#dddddd'
    }   
  ];
  getSteps(): iStep[] {
    return this.steps;
  }
}

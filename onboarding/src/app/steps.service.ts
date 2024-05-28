import { Injectable } from '@angular/core';
import { iStep } from './istep.interface';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private steps: iStep[] = [
   
  ];

  getSteps(): iStep[] {
    return this.steps;
  }
}

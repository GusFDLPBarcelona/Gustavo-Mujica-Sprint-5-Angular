import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../istep.interface';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() steps: iStep[] = [];
  currentStepIndex: number = 0;

  previousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  nextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }
}

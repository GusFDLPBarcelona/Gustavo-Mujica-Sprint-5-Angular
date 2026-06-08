import { Component, Input } from '@angular/core';
import { iStep } from '../istep.interface';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() steps: iStep[] = [];
  currentStepIndex: number = 0;
  animate: boolean = true;

  setCurrentStepTo(index: number): void {
    this.triggerAnimation();
    this.currentStepIndex = index;
  }

  previousStep(): void {
    if (this.currentStepIndex > 0) {
      this.triggerAnimation();
      this.currentStepIndex--;
    }
  }

  nextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.triggerAnimation();
      this.currentStepIndex++;
    }
  }

  private triggerAnimation(): void {
    this.animate = false;
    setTimeout(() => this.animate = true, 0);
  }
}

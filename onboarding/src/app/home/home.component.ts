import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../steps.service';
import { iStep } from '../istep.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EscenaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  steps: iStep[] = [];
  currentStepIndex: number = 0;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }

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

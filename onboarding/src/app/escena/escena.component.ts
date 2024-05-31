import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../istep.interface';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  steps: iStep[] = [];
  currentStepIndex: number = 0;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }

  setCurrentStepTo(index: number): void {
    this.currentStepIndex = index;
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

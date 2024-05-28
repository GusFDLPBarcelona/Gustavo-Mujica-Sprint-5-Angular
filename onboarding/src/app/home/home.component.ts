import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../steps.service';
import { iStep } from '../istep.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, EscenaComponent],
  providers: [StepsService]
})
export class HomeComponent implements OnInit {
  steps: iStep[] = [];

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}

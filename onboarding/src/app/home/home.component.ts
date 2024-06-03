import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { iStep } from '../istep.interface';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [EscenaComponent]
})
export class HomeComponent implements OnInit {
  steps: iStep[] = [];

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}

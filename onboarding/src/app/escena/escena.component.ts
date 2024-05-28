import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { iStep } from '../istep.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EscenaComponent {
  @Input() steps: iStep[] = [];
}

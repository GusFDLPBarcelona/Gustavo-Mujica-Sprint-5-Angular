import { Component } from '@angular/core';


@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  title = 'onboarding';
}
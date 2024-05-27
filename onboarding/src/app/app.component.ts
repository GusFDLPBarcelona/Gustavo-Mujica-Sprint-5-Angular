import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; 
import { EscenaComponent } from './escena/escena.component';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [HomeComponent, EscenaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'onboarding';
}
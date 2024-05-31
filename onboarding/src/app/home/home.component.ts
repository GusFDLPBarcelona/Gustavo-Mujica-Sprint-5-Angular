import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [EscenaComponent]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

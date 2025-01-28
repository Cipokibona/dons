import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DonListComponent} from './don-list/don-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent, DonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}

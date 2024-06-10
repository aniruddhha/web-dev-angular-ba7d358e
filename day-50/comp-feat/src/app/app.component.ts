import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarComponent } from './bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comp-feat';

  startDate = new Date("2020-05-05")

  stObj = {
    border: '1px solid red'
  }
}

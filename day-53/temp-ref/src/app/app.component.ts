import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temp-ref';

  res: number = 0;

  handleClick(str: string) {
    this.title = str
  }

  handleOperation(btn: number, num1: number, num2: number) {

  }
}

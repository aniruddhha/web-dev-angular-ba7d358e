import { Component } from '@angular/core';
import { RangeComponent } from './range-comp';
import { TextComponent } from './text-comp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RangeComponent, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-share';
  fnt = 0

  onReceiveFont(fnt: number) {
    this.fnt = fnt
  }
}

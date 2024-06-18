import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RangeComponent } from './mobile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RangeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'binding-remaining';

  isBk = false

  ip = ''
  hdSz = 3

  handleInputEvent(ev: Event) {

    const ipc = ev.target as HTMLInputElement
    this.ip = ipc.value
  }
}

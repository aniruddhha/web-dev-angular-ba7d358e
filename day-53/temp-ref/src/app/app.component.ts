import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgStyle, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temp-ref';

  res: number = 0;
  isBg = false

  st = {
    border: '1px solid red'
  }

  clc = {
    num1: 0,
    num2: 0,
    rs: 0
  }

  handleClick(str: string) {
    this.title = str
  }

  handleOperation(btn: number) {
    if(btn == 1) {
      this.clc.rs = this.clc.num1 + this.clc.num2
    }
    if(btn == 2) {
      this.clc.rs = this.clc.num1 - this.clc.num2
    }
    if(btn == 3) {
      this.clc.rs = this.clc.num1 * this.clc.num2
    }
    if(btn == 4) {
      this.clc.rs = this.clc.num1 / this.clc.num2
    }
  }
}

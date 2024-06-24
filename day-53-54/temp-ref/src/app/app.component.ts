import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass, NgStyle, FormsModule,
    NgIf, NgFor,
    NgSwitch, NgSwitchCase, NgSwitchDefault
  ],
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

  isH1 = true
  isH2 = true

  names = [
    {id: 1, ttl: 'abc'},
    {id: 2, ttl: 'pqr'},
    {id: 3, ttl: 'lmn'},
    {id: 4, ttl: 'xyz'},
    {id: 5, ttl: 'tuv'}
  ]

  day = 5

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

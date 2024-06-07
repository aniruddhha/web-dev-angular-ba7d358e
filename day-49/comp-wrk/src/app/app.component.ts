import { Component } from '@angular/core';
import { TodolistComponent } from './todolist/todolist.component';
import { MyDeltaComp } from './delt/akjdfv'

@Component({
  selector: 'app-root',
  // template: `<h1>Hey Hi</h1>`,
  templateUrl: `./app.html`,
  // styles: [`h1 { border: 1px solid red  }` ],
  styleUrl: 'app.css',
  standalone: true,
  imports:[TodolistComponent, MyDeltaComp]
})
export class AppComponent {
  title = 'comp-wrk';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MgColDirective } from './mg-col.directive';
import { NgClass, NgIf } from '@angular/common';
import { RptDirective } from './rpt.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MgColDirective, NgClass, RptDirective, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cust-dr';
}

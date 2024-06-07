import { Component } from '@angular/core';
import { ListItemComponent } from './list-item.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports:[ListItemComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
 
  template: `<p [style.fontSize.em]="fntTxt"> {{title}} </p>`,
})
export class TextComponent {
  title = 'App Text';

  @Input()
  fntTxt: number = 0
}
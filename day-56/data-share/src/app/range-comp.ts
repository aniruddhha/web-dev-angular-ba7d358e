import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-range',
    standalone: true,

    template: `
        <input type="range" class="form-range" min="0" max="10" (change)="handleChange($event)">
  `,
})
export class RangeComponent {

    @Output()
    fontChange = new EventEmitter<number>()

    handleChange(e: Event) {
        const el = parseInt((e.target as HTMLInputElement).value)
        console.log(el)

        this.fontChange.emit(el)
    }
}
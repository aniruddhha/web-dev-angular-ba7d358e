import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-range',
    styles: [''],
    template: `
        <input type='range'[min]=1 [max]=100 [value]=rangeValue (input)="handleChange($event)"/> {{rangeValue}}
    `,
    standalone: true
})
export class RangeComponent {

    rangeValue = 0

    @Output()
    range: EventEmitter<number> = new EventEmitter()

    handleChange(e: Event) {
        const inputElement = e.target as HTMLInputElement;
        this.rangeValue = parseInt(inputElement.value)
        this.range.emit(this.rangeValue)
    }
}
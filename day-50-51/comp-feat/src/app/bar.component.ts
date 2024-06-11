import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-bar',
    template: `
        <h1>{{dt}}</h1>
        <h1>{{st}}</h1>
    `,
    standalone: true
})
export class BarComponent {

    @Input()
    dt : Date | string = new Date()

    @Input()
    st = ''
}
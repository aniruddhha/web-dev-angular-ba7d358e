import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  ipOb = {
    num1: 0,
    num2: 0,
    res: 0
  }

  onNum1Change(e: Event)  {
    console.log(`Num1`)

    const ip = e.target as HTMLInputElement
    console.log(`IP Value is ${ip.value}`)

    this.ipOb.num1 = parseInt(ip.value)
  }

  onNum2Change(e: Event) {
    console.log(`Num2`)
    const ip = e.target as HTMLInputElement
    console.log(ip.value)
    this.ipOb.num2 = parseInt(ip.value)
  }

  onAdd() {
    console.log(`Event Add`)
    this.ipOb.res = this.ipOb.num1 + this.ipOb.num2
  }

  onSub() {
    console.log(`Event Sub`)
    this.ipOb.res = this.ipOb.num1 - this.ipOb.num2
  }

  onMul() {
    console.log(`Event Mul`)
    this.ipOb.res = this.ipOb.num1 * this.ipOb.num2
  }

  onDiv() {
    console.log(`Event Div`)
    this.ipOb.res = this.ipOb.num1 / this.ipOb.num2
  }
}

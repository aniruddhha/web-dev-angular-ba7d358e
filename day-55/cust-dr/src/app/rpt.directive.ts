import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRpt]',
  standalone: true
})
export class RptDirective {

  constructor(
    private tempRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(vcRef)
   }

  @Input()
  set appRpt(count: number) {
    this.vcRef.clear()

    for(let i = 0; i< count; i++) {
      const context = { index: i + 1 }
      this.vcRef.createEmbeddedView(this.tempRef, context)
    }
  }
}


class Car {
  private _speed = 10

  get speed() {
    return this._speed
  }

  set speed(val) {
    this._speed = val
  }
}

class Bmw {

  set speedUp(va: number) {

  }
}
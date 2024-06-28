import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMgCol]',
  standalone: true
})
export class MgColDirective {
  // constructor(
  //   private elRef: ElementRef
  // ) {
  //   // elRef.nativeElement.style.width = '100px'
  //   // elRef.nativeElement.style.height = '100px'
  //   // elRef.nativeElement.style.backgroundColor = 'red'
  // }

  @Input('appMgCol')
  @HostBinding('style.background')
  bgCol : string = 'white'

  @HostListener('mouseenter')
  handleMouseIn() {
    this.bgCol = 'red'
  }

  @HostListener('mouseleave')
  handleMoueOut() {
    this.bgCol = 'white'
  }
}

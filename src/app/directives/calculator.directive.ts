import { Directive, EventEmitter, ElementRef, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCalculator]'
})
export class CalculatorDirective {
  @Output() Calc: EventEmitter<number> = new EventEmitter<number>();
  private val: number = 0;

  constructor(private el: ElementRef) { }

  @HostListener('focus', ['$event'])
  onFocus(event: any) {
    event.target.value = '';

  }

  @HostListener('blur', ['$event'])
  onBlur(event: any) {
    const inputValue = parseFloat(event.target.value);

    if (!isNaN(inputValue)) {
      this.val = inputValue;
      this.Calc.emit(this.val);
    }
  }

}

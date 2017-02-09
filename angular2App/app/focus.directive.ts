import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[myFocus]' })
export class FocusDirective {

    element: ElementRef;

    @Input()
    myFocus() {
       this.element.nativeElement.focus();
    }
    constructor(el: ElementRef) {
       this.element = el;
    }
}
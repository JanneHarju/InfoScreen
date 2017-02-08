import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[myFocus]' })
export class FocusDirective {
    constructor(el: ElementRef) {
       el.nativeElement.focus();
    }
}
import { Component,
    trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styles: [ require('./navmenu.component.css') ],
    animations: [
        trigger('slideInOut', [
        state('in', style({
            transform: 'translate3d(0, 0, 0)'
        })),
        state('out', style({
            transform: 'translate3d(-100%, 0, 0)'
        })),
        transition('in => out', animate('400ms ease-in-out')),
        transition('out => in', animate('400ms ease-in-out'))
    ])]
})
export class NavMenuComponent {
    menuState:string = 'out';
 
    toggleMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}

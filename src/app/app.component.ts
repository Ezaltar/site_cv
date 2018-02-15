import {Component} from '@angular/core';
import * as Typed from 'typed.js';

@Component({
    selector: 'app-root',
    template:`<p> {{ someProperty }}</p>`,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    someProperty:string = '';
    ngOnInit() {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 30,
            backSpeed: 10,
        });

    }
}

import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent{
      ngOnInit() {
        var typed = new Typed('#typed', {
                stringsElement: '#typed-strings',
                typeSpeed: 30,
                backSpeed: 10,
            });
}
    }

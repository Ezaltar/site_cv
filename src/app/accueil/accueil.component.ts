import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent {
      ngOnInit() {
        var typed = new Typed('#typed', {
                stringsElement: '#typed-strings',
                typeSpeed: 30,
                backSpeed: 10,
            });
}
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProjetsComponent} from './projets/projets.component';
import {CvComponent} from './cv/cv.component';
import {ExpComponent} from './exp/exp.component';
import {AccueilComponent} from './accueil/accueil.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjetsComponent,
        CvComponent,
        ExpComponent,
        AccueilComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,

        RouterModule.forRoot([
            {
                path: '',
                component: AccueilComponent
            },
            {
                path: 'accueil',
                component: AccueilComponent
            },
            {
                path: 'cv',
                component: CvComponent
            },

            {
                path: 'projets',
                component: ProjetsComponent
            },
            {
                path: 'bac_a_sable',
                component: ExpComponent
            },
            {
                path: 'product',
                component: ProductComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

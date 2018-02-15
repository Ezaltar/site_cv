import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare var jquery:any; 

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
//alert("coucou");
//alert("CACA");

    function UserAction() {
        
          /*
         jquery.ajax({
                    url: "http://localhost:3000/api/users",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            success: function (resultData) {
                alert(resultData);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            },
            timeout: 120000,
        });*/
                
    }

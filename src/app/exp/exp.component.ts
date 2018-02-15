import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-exp',
    templateUrl: './exp.component.html',
    styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
    items = ["HTML/CSS", "Javascript", "Bootstrap 4", "PHP"];
    newItem = "";

    pushItem = function () {
        if (this.newItem != "") {
            this.items.push(this.newItem);
            this.newItem = "";
        }
    }
    removeItem = function (index) {
        this.items.splice(index, 1);
    }



    constructor(private http: Http) {}

    id: number;
    private headers = new Headers({'Content-Type': 'aplication/json'});
    products = [];
    fetchData = function () {
        this.http.get("http://localhost:5555/products").subscribe(
            (res: Response) => {
                this.products = res.json(); //mettre ce qu'on veut a la place de "products" c'est une variable
            }
        )
    }

    deleteProduct = function (id) {
        if (confirm("Sûr ?")) {
            const url = `${"http://localhost:5555/products"}/${id}`;
            return this.http.delete(url, {headers: this.headers}).toPromise()
                .then(() => {
                    this.fetchData();
                })
        }
    }

    responses = [];
    ApiRestPseudo = function () {
        this.http.get("http://localhost:4001/users").subscribe(
            (res: Response) => {
                this.responses = res.json();
            }
        )
    }

    padme = [];
    padmeS = function () {
        this.http.get("https://swapi.co/api/people/35/?format=json").subscribe(
            (res: Response) => {
                this.padme = res.json();
            }
        )
    }

    luke = [];
    lukeS = function () {
        this.http.get("https://swapi.co/api/people/1/?format=json").subscribe(
            (res: Response) => {
                this.luke = res.json();
            }
        )
    }

    anakin = [];
    anakinS = function () {
        this.http.get("https://swapi.co/api/people/4/?format=json").subscribe(
            (res: Response) => {
                this.anakin = res.json();
            }
        )
    }

    leia = [];
    leiaS = function () {
        this.http.get("https://swapi.co/api/people/5/?format=json").subscribe(
            (res: Response) => {
                this.leia = res.json();
            }
        )
    }

    ngOnInit() {
        this.fetchData();
        this.ApiRestPseudo();
        this.padmeS();
        this.lukeS();
        this.leiaS();
        this.anakinS();

    }
}

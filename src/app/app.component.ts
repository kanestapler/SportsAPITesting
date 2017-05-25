import { Component, OnInit } from '@angular/core';
import * as NBA from 'nba';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit {

    ngOnInit(): void {

        //let curry = NBA.findPlayer('Stephen Curry');
    }

    name = 'Angular';
}

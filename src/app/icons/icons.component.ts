import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: [ './icons.component.css' ]
} )
export class IconsComponent implements OnInit {

    flagAddress = false;
    dir = ''

    constructor() {
    }

    ngOnInit() {
    }

    autoAdd(): void {
        this.flagAddress = true;
        this.dir = 'Calle 25 #8-34';
    }

}

import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component( {
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: [ './notifications.component.css' ]
} )
export class NotificationsComponent implements OnInit {

    budget: string;
    renderTasks: boolean;
    per: boolean;
    per2: boolean;

    constructor() {
        this.renderTasks = false;
        this.per = false;
        this.per2 = false;
    }

    ngOnInit() {
    }

    period(): void {
        this.per = true;
        setTimeout( () => {
            this.per = false;
        }, 3000 )
    }

    period2(): void {
        this.per2 = true;
        setTimeout( () => {
            this.per2 = false;
        }, 3000 )
    }

    tasks( value: string ): void {
        this.budget = value;
        this.renderTasks = true;
    }


}

import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component( {
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

    constructor() {
    }

    ngOnInit() {
        this.emailChartType = ChartType.Pie;
        this.emailChartData = {
            labels: [ '62%', '32%', '6%' ],
            series: [ 62, 32, 6 ]
        };
        this.emailChartLegendItems = [
            { title: 'Noviembre', imageClass: 'fa fa-circle text-info' },
            { title: 'Octubre', imageClass: 'fa fa-circle text-danger' },
            { title: 'Septiembre', imageClass: 'fa fa-circle text-warning' }
        ];

        this.hoursChartType = ChartType.Line;
        this.hoursChartData = {
            labels: [ 'Diciembre', 'Enero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre' ],
            series: [
                [ 85, 74, 140, 25, 68, 100, 105, 116, 166, 99, 85, 78 ],
                [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ],
            ]
        };
        this.hoursChartOptions = {
            low: 0,
            high: 300,
            showArea: true,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple( {
                divisor: 3
            } ),
            showLine: false,
            showPoint: false,
        };
        this.hoursChartResponsive = [
            [ 'screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function ( value ) {
                        return value[ 0 ];
                    }
                }
            } ]
        ];
        this.hoursChartLegendItems = [
            { title: 'Consumo Hogar', imageClass: 'fa fa-circle text-info' },
            { title: 'Consumo Ideal', imageClass: 'fa fa-circle text-danger' }
        ];

        this.activityChartType = ChartType.Bar;
        this.activityChartData = {
            labels: [ 'Dec', 'Ene', 'Fen', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov' ],
            series: [
                [ 85, 74, 140, 25, 68, 100, 105, 116, 166, 99, 85, 78 ],
                [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ]
            ]
        };
        this.activityChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.activityChartResponsive = [
            [ 'screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function ( value ) {
                        return value[ 0 ];
                    }
                }
            } ]
        ];
        this.activityChartLegendItems = [
            { title: 'Consumo hogar', imageClass: 'fa fa-circle text-info' },
            { title: 'Consumo ideal', imageClass: 'fa fa-circle text-danger' }
        ];


    }

}

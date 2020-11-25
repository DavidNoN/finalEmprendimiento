import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Mi Perfil',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Tareas',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Pagos',  icon:'pe-7s-cash', class: '' },
    { path: '/icons', title: 'Registro',  icon:'pe-7s-id', class: '' },
    { path: '/maps', title: 'Login',  icon:'pe-7s-way', class: '' },
    { path: '/notifications', title: 'Personalizar',  icon:'pe-7s-config', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

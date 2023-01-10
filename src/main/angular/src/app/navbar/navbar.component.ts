import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[]=[];

  constructor(
    public loginService: LoginService
  ){

  }


  ngOnInit(): void {

    this.items = [
      {label: 'Rezerwacja',
        items:[
          {
            label:'Rezerwuj boisko',
            icon:'pi pi-fw pi-calendar',
            routerLink: "/reservation"
          },
          {
            label:'Zarządzaj rezerwacją',
            icon:'pi pi-fw pi-cog'
          },
          {
            label:'Historia rezerwacji',
            icon:'pi pi-fw pi-clock'
          }
            ]
      },
      {label: 'Drużyna',
        items:[
          {
            label: 'Zarejestruj drużynę',
            icon: 'pi pw-fw pi-pencil',
            routerLink: "/team"
          },
          {
            label: 'Zarządzaj drużyną',
            icon: 'pi pw-fw pi-user-edit'
          },
          {
            label: 'Transfer',
            icon: 'pi pw-fw pi-arrow-right-arrow-left'
          },
        ]},
      {label: 'Tabela'},
      {label: 'Harmonogram'},
      {label: 'Kontakt', routerLink: "/contact"}
      ];

  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {LoginService} from "../../login/login.service";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminNavbarComponent implements OnInit {

  items: MenuItem[] = [];
  itemsRight: MenuItem[ ] = [ ];

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Powrót', routerLink: "/", styleClass: 'admin-navbar-item'},
      {label: 'Akceptuj',
      styleClass: 'admin-navbar-item',
        items:[
          {
            label:'Zaakceptuj drużynę',
            styleClass: 'admin-navbar-subitem',
            icon:'pi pi-users',
            routerLink: "/admin-accept-team"
          },
          {
            label:'Zaakceptuj zawodnika',
            styleClass: 'admin-navbar-subitem',
            icon:'pi pi-user-plus',
            routerLink: "/admin-accept-player"
          },
          {
            label:'Zaakceptuj prośbę o zmianę terminu meczu',
            styleClass: 'admin-navbar-subitem',
            icon:'pi pi-calendar-plus',
            routerLink: "/admin-accept-requests"
          }
            ]
      },
      {label: 'Przypisz',
      styleClass: 'admin-navbar-item',
        items:[
          {
            label: 'Przypisz sędziego do meczu',
            styleClass: 'admin-navbar-subitem',
            icon: 'pi pi-stopwatch',
            routerLink: "/"
          },
          {
            label: 'Przypisz drużyny do meczu',
            styleClass: 'admin-navbar-subitem',
            icon: 'pi pi-users',
            routerLink: "/"
          },
        ]},
        {label: 'Edytuj',
        styleClass: 'admin-navbar-item',
        items:[
          {
            label:'Edytuj termin meczu',
            styleClass: 'admin-navbar-subitem',
            icon:'pi pi-calendar-plus',
            routerLink: "/"
          },
          {
            label:'Edytuj rezerwację',
            styleClass: 'admin-navbar-subitem',
            icon:'pi pi-file-edit',
            routerLink: "/"
          },
          ]
      }
      ];
    this.itemsRight =  [
      {label: 'Witaj ' + this.loginService.getName() || undefined, routerLink: "/users/my-profile"}
    ]
  }

}

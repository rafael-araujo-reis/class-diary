import { IListMenu } from './../../interfaces/IListMenu.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.scss'],
})
export class MenuTabsComponent implements OnInit {
  listMenu: IListMenu[] = [
    { title: 'plano de aula', icon: 'book', ative: false },
    { title: 'diário', icon: 'format_list_bulleted', ative: true },
    { title: 'professor', icon: 'person', ative: true },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getItemsMenu();
  }

  getItemsMenu() {}
}

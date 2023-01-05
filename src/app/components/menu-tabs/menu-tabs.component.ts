import { MenuApplicationService } from './../../services/menu-application.service';
import { IListMenu } from './../../interfaces/IMenu.interface';
import { Component, OnInit } from '@angular/core';
import { RouterNavigate } from 'src/app/shared/utils/router-navigate';
@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.scss'],
})
export class MenuTabsComponent implements OnInit {
  listMenu: IListMenu[] = [];

  constructor(
    private menu: MenuApplicationService,
    private navigateTo: RouterNavigate
  ) {}

  ngOnInit(): void {
    this.getItemsMenu();
  }

  getItemsMenu() {
    this.menu.getMenu().subscribe((listMenu) => (this.listMenu = listMenu));
  }

  navigateRouter(path: string) {
    this.navigateTo.navigatePath(path);
  }
}

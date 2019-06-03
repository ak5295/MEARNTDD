import { MenuItem } from '../../models/menu-item';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent {
  model: any = {
    menuName: '',
    menuItems: []
  };

  @Input()
  // set menuItems(itemList: Array<MenuItem>) {
  set menuItems(itemList: Array<MenuItem>) {

    // make a shallow copy
    this.model.menuItems = itemList.slice(0);

    // change this so this.model.menuItems makes a deep copy
    this.model.menuItems = JSON.parse(JSON.stringify(itemList));
    console.log('this.model.menuItems=', this.model.menuItems);

  }

  @Input()
  set menuName(name: string) {
    this.model.menuName = name;
    console.log('this.model.menuName=', this.model.menuName);
  }
}


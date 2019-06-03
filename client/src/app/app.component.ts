import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  model: any = {
    menuName: "Menu 1 **",
    menuItems: [
      {
        name: "item1",
        price: 9.99,
        description: "menu item 1"
      }
    ]
  }
}

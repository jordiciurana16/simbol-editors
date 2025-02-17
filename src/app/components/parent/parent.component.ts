import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { InfoDisplayChildComponent } from "./info-display-child/info-display-child.component";
import { MenuChildComponent } from "./menu-child/menu-child.component";

@Component({
  selector: 'app-parent',
  imports: [CardModule, InfoDisplayChildComponent, MenuChildComponent],
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {
  items = [
    {
      menuItem: "tab 1",
      displayItem: "Hello Item number 1"
    },
    {
      menuItem: "tab 2",
      displayItem: "Hello Item number 2"
    }
  ];

  menuItems: MenuItem[] = [];
  displayItem = "";

  ngOnInit() {
    this.createMenuItems();
  }

  createMenuItems() {
    this.menuItems = this.items.map(item=> ({
      label: item.menuItem,
      icon: 'pi pi-thumbs-up',
      command: () => this.displayItem = item.displayItem
    }))
  }

  displayItemInfo(displayText: string) {
    this.displayItem = displayText;
  }
}

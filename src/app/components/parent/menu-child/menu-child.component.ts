import { Component, input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { menuStyles } from './menu-child.component.styles';

@Component({
  selector: 'app-menu-child',
  imports: [MenubarModule],
  templateUrl: './menu-child.component.html',
  styleUrl: './menu-child.component.scss'
})
export class MenuChildComponent {
  menuItems = input<MenuItem[]>([]);
  menubarStyles = menuStyles;
}

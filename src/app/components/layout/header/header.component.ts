import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { LogoTextColorComponent } from '../../common/logo-text-color/logo-text-color.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    LogoTextColorComponent,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    DividerModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
}

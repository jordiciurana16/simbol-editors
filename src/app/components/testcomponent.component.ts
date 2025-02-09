import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { amberCard } from './testcomponent.styles';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  imports: [CardModule],
})
export class TestComponent {
  para = 'this is my test component';

  para2 = 'test test';
  header_global_theme = 'Global Theme Card';
  footer_global_theme = 'This is the footer of the Global Theme Card';
  header_local = 'Local Theme Card';
  footer_local = 'This is the footer of the Local Theme Card';
  localStyle = amberCard;
}

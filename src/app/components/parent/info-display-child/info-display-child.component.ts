import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-display-child',
  imports: [],
  templateUrl: './info-display-child.component.html',
})
export class InfoDisplayChildComponent {
  displayItem = input<string>(''); 
}

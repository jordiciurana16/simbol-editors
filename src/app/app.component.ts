import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TestComponent } from '@app/components/testcomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular19-lint-docker';
  p = 'paragraph1';
  p2 = 'paragraph2';
  p3 = 'paragraph3';
  p4 = 'paragraph4';
  p5 = 'para5';
  p6 = 'para6';
  p7 = 'para7';
  p8 = 'para8';
  p9 = 'para9';

  dog = 'dog.jpg';
}

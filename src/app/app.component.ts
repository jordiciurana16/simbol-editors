import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';

import { TestComponent } from '@app/components/testcomponent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, ButtonModule, CheckboxModule, FormsModule, CardModule],
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

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element !== null) {
      element.classList.toggle('my-app-dark');
    }
  }
}

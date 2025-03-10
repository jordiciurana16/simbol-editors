import { Component } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { ButtonModule } from 'primeng/button';
import { LandingComponent } from './views/landing/landing.component';
import { BooksComponent } from './views/books/books.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ButtonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

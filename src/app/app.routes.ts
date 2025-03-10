import { Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { BooksComponent } from './views/books/books.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'llibres', component: BooksComponent },
];

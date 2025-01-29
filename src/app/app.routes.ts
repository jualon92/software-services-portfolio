import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MisionComponent } from './mision/mision.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'mision', component: MisionComponent},
   { path: '',  pathMatch: 'full', component: HomeComponent },
    
];

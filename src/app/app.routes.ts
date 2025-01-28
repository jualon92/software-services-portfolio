import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MisionComponent } from './mision/mision.component';

export const routes: Routes = [
  { path: 'mision', component: MisionComponent},
   { path: '',  pathMatch: 'full', component: HomeComponent },
    
];

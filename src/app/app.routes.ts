import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';

export const routes: Routes = [
    {path: '','title' : 'Log In', component: LoginComponent},
    {path: 'browse','title' : 'Browse', component: BrowseComponent}
];

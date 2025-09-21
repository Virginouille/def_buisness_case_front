import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';

import { RegistrerFormComponent } from './components/auth/registrer-form/registrer-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //Si vide, redirection vers home
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegistrerFormComponent },
    { path: 'login', component: LoginComponent }
];

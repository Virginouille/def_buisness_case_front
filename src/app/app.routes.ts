import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrerFormComponent } from './components/auth/registrer-form/registrer-form.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeDashboardComponent } from './components/dashboard/home-dashboard/home-dashboard.component';
import { BorneComponent } from './components/dashboard/borne/borne.component';
import { ModifyBorneComponent } from './components/dashboard/modify-borne/modify-borne.component';
import { ReservationRequestsComponent } from './components/dashboard/reservation-requests/reservation-requests.component';

export const routes: Routes = [

    //Partie home
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //Si vide, redirection vers home
    { path: 'home', component: HomeComponent },

    //Partie auth et register
    { path: 'auth', component: AuthComponent },
    { path: 'register', component: RegistrerFormComponent },
    { path: 'login', component: LoginComponent },

    //Partie dashboard
    { path: 'home_dashboard', component: HomeDashboardComponent },
    { path: 'borne', component: BorneComponent },
    { path: 'modifier_borne', component: ModifyBorneComponent },
    { path: 'demande_de_reservations', component: ReservationRequestsComponent }
];

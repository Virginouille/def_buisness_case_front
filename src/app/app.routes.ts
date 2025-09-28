import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrerFormComponent } from './components/auth/registrer-form/registrer-form.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeDashboardComponent } from './components/dashboard/home-dashboard/home-dashboard.component';
import { BorneComponent } from './components/dashboard/borne/borne.component';
import { ModifyBorneComponent } from './components/dashboard/modify-borne/modify-borne.component';
import { ReservationRequestsComponent } from './components/dashboard/reservation-requests/reservation-requests.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReserveElectricalTerminalComponent } from './components/reservation/reserve-electrical-terminal/reserve-electrical-terminal.component';
import { ReservationSummaryComponent } from './components/reservation/reservation-summary/reservation-summary.component';

export const routes: Routes = [

    //Partie home
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //Si vide, redirection vers home
    { path: 'home', component: HomeComponent },

    //Partie auth et register
    { path: 'auth', component: AuthComponent },
    { path: 'register', component: RegistrerFormComponent },
    { path: 'login', component: LoginComponent },

    //Partie réservation borne
    { path: 'reserver-borne', component: ReserveElectricalTerminalComponent },
    { path: 'recapitulatif-reservation', component: ReservationSummaryComponent },

    //Partie contact
    { path: 'contact', component: ContactFormComponent },

    //Partie dashboard
    { path: 'home_dashboard', component: HomeDashboardComponent },
    { path: 'borne', component: BorneComponent },
    { path: 'modifier_borne', component: ModifyBorneComponent }, //voir pour supprimer !!
    { path: 'demande_de_reservations', component: ReservationRequestsComponent }
];

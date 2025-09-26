import { Component } from '@angular/core';
import { ReservationCardComponent } from '../reservation-request-card/reservation-card.component';

@Component({
  selector: 'app-reservation-requests',
  standalone: true,
  imports: [ReservationCardComponent],
  templateUrl: './reservation-requests.component.html',
  styleUrl: './reservation-requests.component.css'
})
export class ReservationRequestsComponent {

}

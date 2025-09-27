import { Component } from '@angular/core';
import { ReservationCardRequestComponent } from '../reservation-card-request/reservation-card-request.component';

@Component({
  selector: 'app-reservation-requests',
  standalone: true,
  imports: [ReservationCardRequestComponent],
  templateUrl: './reservation-requests.component.html',
  styleUrl: './reservation-requests.component.css'
})
export class ReservationRequestsComponent {

}

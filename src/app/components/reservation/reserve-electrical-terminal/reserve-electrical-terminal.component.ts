import { Component } from '@angular/core';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';

@Component({
  selector: 'app-reserve-electrical-terminal',
  standalone: true,
  imports: [ReservationFormComponent],
  templateUrl: './reserve-electrical-terminal.component.html',
  styleUrl: './reserve-electrical-terminal.component.css'
})
export class ReserveElectricalTerminalComponent {

}

import { Component } from '@angular/core';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { TerminalReserveModalComponent } from '../terminal-reserve-modal/terminal-reserve-modal.component';

@Component({
  selector: 'app-reserve-electrical-terminal',
  standalone: true,
  imports: [ReservationFormComponent, TerminalReserveModalComponent],
  templateUrl: './reserve-electrical-terminal.component.html',
  styleUrl: './reserve-electrical-terminal.component.css'
})
export class ReserveElectricalTerminalComponent {
  public showModal: boolean = false;

  constructor() { }
}

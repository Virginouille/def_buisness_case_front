import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terminal-reserve-modal',
  standalone: true,
  imports: [],
  templateUrl: './terminal-reserve-modal.component.html',
  styleUrl: './terminal-reserve-modal.component.css'
})
export class TerminalReserveModalComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}

import { Component } from '@angular/core';
import { CardBorneComponent } from '../card-borne/card-borne.component';

@Component({
  selector: 'app-borne',
  standalone: true,
  imports: [CardBorneComponent],
  templateUrl: './borne.component.html',
  styleUrl: './borne.component.css'
})
export class BorneComponent {

}

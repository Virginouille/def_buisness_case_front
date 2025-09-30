import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {

  reservationForm: FormGroup
  submitEnable = false //Par défaut le bout est désactivé

  //Structure du form
  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
    }) // en construction
  }
}

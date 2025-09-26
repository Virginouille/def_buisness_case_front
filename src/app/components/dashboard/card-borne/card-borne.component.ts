import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModifyBorneComponent } from "../modify-borne/modify-borne.component";

@Component({
  selector: 'app-card-borne',
  standalone: true,
  imports: [RouterLink, ModifyBorneComponent],
  templateUrl: './card-borne.component.html',
  styleUrl: './card-borne.component.css'
})
export class CardBorneComponent {

}

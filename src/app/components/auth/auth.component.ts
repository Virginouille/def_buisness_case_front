import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { RegistrerFormComponent } from './registrer-form/registrer-form.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, RegistrerFormComponent, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  //Affichage du composant Login par défaut
  isLoginMode: boolean = true;

  //Méthode pour basculer du mode login au mode register (en fonction si connecté ou pas)
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}

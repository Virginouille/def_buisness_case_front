import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';
import { error } from 'console';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    //initialisation du formulaire
    this.loginForm = this.fb.group({
      //Username
      username: ['', [
        Validators.required, // obligatoire
        Validators.minLength(4), // avec minimum 4 caractères
        Validators.maxLength(20), // avec maximum 20 caractères
        Validators.pattern('^[a-zA-Z0-9]+$') // composé uniquement de lettres et chiffres
      ]],

      //Password
      password: ['', [
        Validators.required, // obligatoire
        Validators.minLength(6), // avec minimum 6 caractères
        Validators.maxLength(20), // avec maximum 20 caractères
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{6,20}$') //au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial.
      ]]
    });
  }

  /*Méthode onLogin()*/
  onLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => console.log("Connexion réussie !", res),
      error: (err) => console.log("Connexion échouée", err),
    });
  }
}

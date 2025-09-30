import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrer-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registrer-form.component.html',
  styleUrl: './registrer-form.component.css'
})
export class RegistrerFormComponent {

  registerForm: FormGroup;
  submitEnabled = false; // par défaut le bouton est désactivé

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s-]{2,}$/)]],
      nom: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s-]{2,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^(?:[0-9] ?){10}$/)]],
      dateDeNaissance: ['', Validators.required],
      adresse: ['', [Validators.required, Validators.pattern(/^[0-9]{1,4}\s+[A-Za-zÀ-ÖØ-öø-ÿ'’\-\s]+$/)]], //Adresse commence par 1 à 4 chiffres avec au moins un espace et suivi de lettres
      ville: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ'’\-\s]+$/)]], //lettres avec accents,autorise apostrophes droites ou courbes, les tirets et les espaces. Au moins un caractère
      codePostal: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]], //code postal à 5 chiffres
      motDePasse: ['', Validators.required],
      confirmationMotDePasse: ['', Validators.required],
      checkbox: [false, Validators.required]
    })
  }

  /**Méthode à l'initialisation du composant */
  ngOnInit() {
    this.registerForm.valueChanges.subscribe(() => {
      // active le bouton seulement si le formulaire est valide
      this.submitEnabled = this.registerForm.valid;
    });
  }

  /*Méthode gestion de la soumission du formulaire de création de compte*/
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulaire de contact soumis :', this.registerForm.value);
      //penser à utiliser http client pour envoyer au back créer un service
    } else {
      console.log('Formulaire invalide');
    }
  }
}

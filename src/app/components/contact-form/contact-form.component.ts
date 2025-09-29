import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm: FormGroup;
  submitEnabled = false; // par défaut le bouton est désactivé

  ngOnInit() {
    this.contactForm.valueChanges.subscribe(() => {
      // active le bouton seulement si le formulaire est valide
      this.submitEnabled = this.contactForm.valid;
    });
  }

  //Structure du formulaire
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s-]{2,}$/)]],
      nom: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s-]{2,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^(?:[0-9] ?){10}$/)]], //Numéro de téléphone avec possibiliés de point et d'espaces
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  //A la soumission du formulaire
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulaire de contact soumis :', this.contactForm.value);
      //penser à utiliser http cliet pour envoyer au back
    } else {
      console.log('Formulaire invalide');
    }
  }
}

//Ajouter une méthode qui filtrer les non numériques pour bloquer l'utilisation des lettres dans le numéro de tél
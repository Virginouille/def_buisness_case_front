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

  /**Méthode à l'initialisation du composant */
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

  /*Méthode gestion de la soumission du formulaire de contact*/
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulaire de contact soumis :', this.contactForm.value);
      //penser à utiliser http cliet pour envoyer au back
    } else {
      console.log('Formulaire invalide');
    }
  }

  /*Méthode filtrer le champs téléphone*/
  onTelephoneInput(event: Event) {
    const input = event.target as HTMLInputElement;

    // Garder uniquement les chiffres
    let numericValue = input.value.replace(/[^0-9]/g, '');

    // Limiter à 10 chiffres
    if (numericValue.length > 10) {
      numericValue = numericValue.substring(0, 10);
    }

    //Mise à jour du champ du formulaire sans déclencher valueChanges
    this.contactForm.get('telephone')?.setValue(numericValue, { emitEvent: false });

    //Formatage en blocs de 2 chiffres
    let formattedValue = '';
    for (let i = 0; i < numericValue.length; i += 2) {
      if (i > 0) formattedValue += ' ';
      formattedValue += numericValue.substring(i, i + 2);
    }

    //Met à jour le FormControl et l'input
    this.contactForm.get('telephone')?.setValue(formattedValue, { emitEvent: false });
    input.value = formattedValue; // met à jour l'affichage réel
  }

}


import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { CapitalizeNameDirective } from '../../../directives/capitalize-name.directive';
import { EmailNormalizeDirective } from '../../../directives/email-normalize.directive';

@Component({
  selector: 'app-registrer-form',
  standalone: true,
  imports: [ReactiveFormsModule, CapitalizeNameDirective, EmailNormalizeDirective],
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
      motDePasse: ['', [Validators.required, Validators.pattern(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*()_\-+=\[\]{};:'",.<>\/?\\|`~]).*$/)]],
      confirmationMotDePasse: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
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
    this.registerForm.get('telephone')?.setValue(numericValue, { emitEvent: false });

    //Formatage en blocs de 2 chiffres
    let formattedValue = '';
    for (let i = 0; i < numericValue.length; i += 2) {
      if (i > 0) formattedValue += ' ';
      formattedValue += numericValue.substring(i, i + 2);
    }

    //Met à jour le FormControl et l'input
    this.registerForm.get('telephone')?.setValue(formattedValue, { emitEvent: false });
    input.value = formattedValue; // met à jour l'affichage réel
  }

  /**Méthode vérifie que la confirmation de mot de passe est identitque à l'input mot de passe */
  private passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('motDePasse')?.value;
    const confirm = control.get('confirmationMotDePasse')?.value;
    if (password && confirm && password !== confirm) {
      return { passwordMismatch: true }
    }
    return null;
  }
}

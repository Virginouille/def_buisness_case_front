import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appEmailNormalize]',
  standalone: true
})
export class EmailNormalizeDirective {

  constructor(private control: NgControl) { }

  /**
   * Méthode qui normalise l'entrée utilisateur en chaine en minuscles et supprime les espaces eb début et fin
   * @param value La chaîne de caractères à normaliser
   * @returns La chaîne normalisée en minuscules et trim
   */
  private normalize(value: string): string {
    if (!value) return '';
    return value.toLowerCase().trim();
  }

  /**
   * Normalise la valeur du FormControl associé à cet input.
   * À appeler lors de la soumission du formulaire.
   * 
   * Utilise la méthode `normalize` pour convertir la chaîne en minuscules et supprimer les espaces superflus.
   * La mise à jour se fait sans émettre d'événements (`emitEvent: false`).
   */
  public normalizeControl() {
    const value = this.control.control?.value;
    if (value) {
      this.control.control?.setValue(this.normalize(value), { emitEvent: false });
    }
  }

}

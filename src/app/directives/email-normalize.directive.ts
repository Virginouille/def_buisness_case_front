import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appEmailNormalize]',
  standalone: true
})
export class EmailNormalizeDirective {

  constructor(private control: NgControl) { }

  /**
   * Méthode qui normalise l'entrée utilisateur en chaine en minuscles
   * @param value La chaîne de caractères à normaliser
   * @returns La chaîne normalisée en minuscules
   */
  private normalize(value: string): string {
    if (!value) return '';
    return value.toLowerCase().trim();
  }

  /**
  * Méthode qui se charge de transformer la valeur du champ quand l'utilisateur valide le forumlaire
  * utilise la méthode 'normalize'
 */
  public normalizeControl() {
    const value = this.control.control?.value;
    if (value) {
      this.control.control?.setValue(this.normalize(value), { emitEvent: false });
    }
  }

}

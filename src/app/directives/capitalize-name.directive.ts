import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCapitalizeName]',
  standalone: true
})
export class CapitalizeNameDirective {

  constructor(private control: NgControl) { }

  /**
   * Méthode qui normalise l'entrée utilisateur : met la première lettre en majuscule
   * et le reste en minuscule
   * 
   * @param value de la chaine de caractère à normaliser
   * @return la chaîne normalisée
   */
  private normalize(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  @HostListener('blur')
  /**
   * Méthode qui se charge de transformer la valeur du champ quand l'utilisateur le quitte
   * utilise la méthode 'normalize'
  */
  onBlur() {
    const value = this.control.control?.value;
    if (value) {
      const normalized = this.normalize(value);
      this.control.control?.setValue(normalized, { emitEvent: false });
    }
  }
}

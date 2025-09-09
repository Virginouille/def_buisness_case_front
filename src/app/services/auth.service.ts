import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  /*Méthode de login*/
  login(credentials: { username: string, password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  //Stocker le token
  // Gérer la déco
  // Vérifier si l'utilisateur est connecté

}

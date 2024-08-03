import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.firestore.collection('admin', ref => ref.where('email', '==', email).where('password', '==', password))
      .snapshotChanges()
      .pipe(
        map(users => {
          if (users.length > 0) {
            this.router.navigate(['/makyatraiteur/admin']); // Redirect to your desired page after login
            return true;
          } else {
            throw new Error('Invalid email or password');
          }
        })
      );
  }

  logout() {
    // Logic to handle logout, e.g., removing session storage items
    this.router.navigate(['/login']);
  }
}

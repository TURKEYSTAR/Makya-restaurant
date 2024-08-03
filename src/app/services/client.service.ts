import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.firestore.collection('users', ref => ref.where('email', '==', email).where('password', '==', password))
      .snapshotChanges()
      .pipe(
        map(users => {
          if (users.length > 0) {
            this.router.navigate(['/dashboard']); // Redirect to your desired page after login
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

  getClients(): Observable<any[]> {
    return this.firestore.collection('admin').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}

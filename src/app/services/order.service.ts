import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private firestore: AngularFirestore) {}

  // Get all orders
  getOrders(): Observable<any[]> {
    return this.firestore.collection('orders').snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  // Get recent orders
  getRecentOrders(limit: number): Observable<any[]> {
    return this.firestore.collection('orders', ref => ref.orderBy('date', 'desc').limit(limit))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
}

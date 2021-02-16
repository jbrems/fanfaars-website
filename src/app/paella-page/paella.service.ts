import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaellaService {
  constructor(private firestore: AngularFirestore) {}

  public async saveReservation(reservation: any) {
    const name = reservation.name.replace(/\s/g, '-');
    const date = new Date().toISOString();
    const reservationId = `${new Date().getFullYear()}_${name}_${date}`;
    return this.firestore
      .collection('paella')
      .doc(reservationId)
      .set(reservation);
  }
}

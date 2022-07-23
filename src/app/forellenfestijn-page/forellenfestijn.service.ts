import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForellenfestijnService {
  constructor(private firestore: AngularFirestore) {}

  public async saveReservation(reservation: any) {
    const name = reservation.name.replace(/\s/, '-');
    const date = new Date().toISOString();
    const reservationId = `${name}_${date}`;
    return this.firestore
      .collection('forellenfestijn')
      .doc(reservationId)
      .set(reservation);
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Timeslots } from './timeslot';

@Injectable({
  providedIn: 'root',
})
export class TimeslotService {
  constructor(private firestore: AngularFirestore) { }

  /**
   * Get the timeslots config.
   */
  public getTimeslots(): Observable<Timeslots> {
    return this.fetchTimeslots();
  }

  /**
   * Fetches the timeslots from Firestore.
   */
  private fetchTimeslots(): Observable<Timeslots> {
    return this.firestore
      .doc<Timeslots>('config/forellenfestijn')
      .valueChanges();
  }
}

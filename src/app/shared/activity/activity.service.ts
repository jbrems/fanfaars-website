import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/compat/firestore';
import { map, tap } from 'rxjs/operators';
import { Activity } from './activity';
import { Observable, of } from 'rxjs';
import { documentId } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activities: Activity[];

  constructor(private firestore: AngularFirestore) {}

  public getAllActivities(): Observable<Activity[]> {
    return this.firestore
      .collection('activities', query => query
        .orderBy(documentId(), 'asc')
      )
      .get()
      .pipe(
        map(this.mapQuerySnapshotToActivities),
      );
  }

  public async saveActivity(activity: Activity): Promise<void> {
    return this.firestore.doc<Activity>(`activities/${activity.id}`).set(activity);
  }

  public async deleteActivity(activity: Activity): Promise<void> {
    return this.firestore.doc<Activity>(`activities/${activity.id}`).delete();
  }

  /**
   * Get future activities for the given group with the given limit.
   * @param limit (optional, default: all) The number of activities you want to get
   * @param group (optional, default: all) The group to fetch the activities for
   */
  public getActivities(limit?: number, group?: string): Observable<Activity[]> {
    return this.fetchFutureActivities()
      .pipe(
        map((activities) => {
          let filteredActivities = [...activities];
          if (group) {
            filteredActivities = filteredActivities.filter(activity => activity.group === group);
          }
          if (limit) {
            filteredActivities = filteredActivities.slice(0, limit);
          }
          return filteredActivities;
        })
      );
  }

  /**
   * Fetches the future activities from Firestore ordered by date (ascending).
   */
  private fetchFutureActivities(): Observable<Activity[]> {
    if (this.activities) {
      return of(this.activities);
    }

    const today = new Date().toISOString().split('T')[0];
    return this.firestore
      .collection('activities', query => query
        .where('date', '>=', today)
        .orderBy('date')
      )
      .get()
      .pipe(
        map(this.mapQuerySnapshotToActivities),
        tap(activities => this.activities = activities)
      );
  }

  /**
   * Maps the querySnapshot returned by Firestore to a list of Activity.
   */
  private mapQuerySnapshotToActivities(querySnapshot: QuerySnapshot<Activity>): Activity[] {
    const activities: Activity[] = [];
    querySnapshot.forEach(doc => activities.push({ id: doc.id, ...doc.data() } as Activity));
    return activities;
  }
}

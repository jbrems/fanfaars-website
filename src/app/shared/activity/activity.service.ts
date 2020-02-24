import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Activity } from './activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activities: Activity[];

  constructor(private firestore: AngularFirestore) {}

  /**
   * Initializes the service by fetching the future activities from Firestore.
   */
  public async initialize() {
    this.activities = await this.fetchFutureActivities().toPromise();
  }

  /**
   * Get future activities for the given group with the given limit.
   * @param limit (optional, default: all) The number of activities you want to get
   * @param group (optional, default: all) The group to fetch the activities for
   */
  public getActivities(limit?: number, group?: string): Activity[] {
    let filteredActivities = [...this.activities];
    if (group) {
      filteredActivities = filteredActivities.filter(activity => activity.group === group);
    }
    if (limit) {
      filteredActivities = filteredActivities.slice(0, limit);
    }
    return filteredActivities;
  }

  /**
   * Fetches the future activities from Firestore ordered by date (ascending).
   */
  private fetchFutureActivities(): Observable<Activity[]> {
    const today = new Date().toISOString().split('T')[0];
    return this.firestore
      .collection('activities', query => query
        .where('date', '>=', today)
        .orderBy('date')
      )
      .get()
      .pipe(
        map(this.mapQuerySnapshotToActivities)
      );
  }

  /**
   * Maps the querySnapshot returned by Firestore to a list of Activity.
   */
  private mapQuerySnapshotToActivities(querySnapshot: QuerySnapshot<Activity>): Activity[] {
    const activities: Activity[] = [];
    querySnapshot.forEach(doc => activities.push(doc.data() as Activity));
    return activities;
  }
}

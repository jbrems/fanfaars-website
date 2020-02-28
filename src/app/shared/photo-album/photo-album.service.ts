import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';
import { PhotoAlbum } from './photo-album';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoAlbumService {
  private photoAlbums: PhotoAlbum[];

  constructor(private firestore: AngularFirestore) {}

  /**
   * Get the photo albums for the given group with the given limit.
   * @param limit (optional, default: all) The number of photo albums you want to get
   * @param group (optional, default: all) The group to fetch the photo albums for
   */
  public getPhotoAlbums(limit?: number, group?: string): Observable<PhotoAlbum[]> {
    return this.fetchPhotoAlbums()
      .pipe(
        map((photoAlbums) => {
          let filteredPhotoAlbums = [...photoAlbums];
          if (group) {
            filteredPhotoAlbums = filteredPhotoAlbums.filter(photoAlbum => photoAlbum.group === group);
          }
          if (limit) {
            filteredPhotoAlbums = filteredPhotoAlbums.slice(0, limit);
          }
          return filteredPhotoAlbums;
        })
      );
  }

  /**
   * Fetches the photo albums from Firestore ordered by date (descending).
   */
  private fetchPhotoAlbums(): Observable<PhotoAlbum[]> {
    if (this.photoAlbums) {
      return of(this.photoAlbums);
    }

    return this.firestore
      .collection('photoalbums', query => query
        .orderBy('date', 'desc')
      )
      .get()
      .pipe(
        map(this.mapQuerySnapshotToPhotoAlbums),
        tap(photoAlbums => this.photoAlbums = photoAlbums)
      );
  }

  /**
   * Maps the querySnapshot returned by Firestore to a list of PhotoAlbum.
   */
  private mapQuerySnapshotToPhotoAlbums(querySnapshot: QuerySnapshot<PhotoAlbum>): PhotoAlbum[] {
    const photoAlbums: PhotoAlbum[] = [];
    querySnapshot.forEach(doc => photoAlbums.push(doc.data() as PhotoAlbum));
    return photoAlbums;
  }
}

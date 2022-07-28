import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  public loggedInUser = new BehaviorSubject<any>(null);

  constructor(private angularFireAuth: AngularFireAuth) { }

  async ngOnInit(): Promise<void> {
    if (!this.loggedInUser.value) {
      const result = await this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());
      this.loggedInUser.next(result.additionalUserInfo.profile);
      // this.loggedInUser.next({ given_name: 'Test user' });
    }
  }

  ngOnDestroy(): void {
    this.loggedInUser.next(null);
    this.loggedInUser.complete();
  }
}

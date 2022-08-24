import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations: Observable<any>;
  activeLocation = new Subject<string>();

  constructor(firebase: FirebaseService) {
    this.locations = firebase.read('Config/Locations/');
    this.locations.subscribe(v => this.activeLocation.next(v[0]));
  }
}

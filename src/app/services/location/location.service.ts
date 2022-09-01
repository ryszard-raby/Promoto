import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations: Observable<any>;
  activeLocation = new BehaviorSubject<string>('');
  getLocation: string = String(localStorage.getItem('location'));

  constructor(firebase: FirebaseService) {
    this.getLocation = this.getLocation ? this.getLocation : 'PL'
    this.locations = firebase.read('Config/Locations/');
    this.locations.subscribe(v => {

    });
    this.activeLocation.next(this.getLocation);
    this.activeLocation.subscribe(activeLocation => localStorage.setItem('location', activeLocation))
  }
}

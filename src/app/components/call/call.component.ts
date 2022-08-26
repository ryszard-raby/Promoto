import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  
  items: Observable<any>;
  location: string = 'PL';
  call: string = '';
  number: string = '';

  constructor(private firebase: FirebaseService, private locationService: LocationService) {
    this.items = this.firebase.read('Content/Call/PL');

    locationService.activeLocation.subscribe(location => {
      this.items = this.firebase.read('Content/Call/PL');
      this.items.subscribe(v => {
        this.number = v[0];
        this.call = v[1]
      })
    })
  }

  ngOnInit(): void {

  }

}

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
  
  location: string = 'PL';
  call: string = '';
  number: string = '';

  constructor(private firebase: FirebaseService, private locationService: LocationService) {
    this.locationService.activeLocation.subscribe(location => {
      this.firebase.read('Content/Call/' + location).subscribe(data => {
        this.number = data[0].Phone;
        this.call = data[0].CallButton;
      })
    })
  }

  ngOnInit(): void {

  }

}

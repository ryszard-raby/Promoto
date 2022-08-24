import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  header: string = '';
  text: string = '';
  offers: any[] = [];

  constructor(firebase: FirebaseService, locationService: LocationService) {
    locationService.activeLocation.subscribe(location => {
      firebase.read('Content/Offer/Title/' + location).subscribe(title => {
        this.header = title[0];
        this.text = title[1];
      })
      firebase.read('Content/Offer/Offers/' + location).subscribe(offers => {
        this.offers = offers
      })
    })
  }

  ngOnInit(): void {
  }

}

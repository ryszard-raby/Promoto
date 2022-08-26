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
      firebase.read('Content/Offer/Header/' + location).subscribe(header => {
        this.header = header[0].Title;
        this.text = header[0].Subtitle;
      })
      firebase.read('Content/Offer/Offers/' + location).subscribe(offers => {
        this.offers = offers
      })
    })
  }

  ngOnInit(): void {
  }

  toggleClass(event: any, className: string) {
    const el = event.target.closest('.card').querySelector('.list');
    const hasClass = el.classList.contains(className);

    !hasClass ? el.classList.add(className) : el.classList.remove(className);
  }

  scrollTo(event: any) {
    const el = event.target.closest('.card');
    el.scrollIntoView({behavior: "smooth"});
  }

}

import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact = {};

  constructor(private firebase: FirebaseService, private locationService: LocationService) {
    this.locationService.activeLocation.subscribe(location => {
      this.firebase.read('Content/Contact/' + location).subscribe(contact => {
        this.contact = contact[0];
      })
    })
  }

  ngOnInit(): void {
  }

}

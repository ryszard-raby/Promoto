import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/interfaces/payment';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  payment: Payment = {};

  constructor(private firebase: FirebaseService, private locationService: LocationService) {
    this.locationService.activeLocation.subscribe(location => {
      this.firebase.read('Content/Payment/' + location).subscribe(payment => {
        this.payment = payment[0];
      })
    })
  }
  ngOnInit(): void {
  }

}

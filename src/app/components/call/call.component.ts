import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  
  items: Observable<any>
  location: string = 'PL'
  call: string = '';
  number: string = '';

  constructor(private firebase: FirebaseService) {
    this.items = this.firebase.read('Content/Call/' + this.location);
  }

  ngOnInit(): void {
    this.items.subscribe(v => {
      this.number = v[0];
      this.call = v[1]
    })
  }

}

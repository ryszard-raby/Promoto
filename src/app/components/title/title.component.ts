import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { LocationService } from 'src/app/services/location/location.service';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title: string = '';
  subtitle: string = '';
  items: Observable<any>
  location: string = 'PL'

  constructor(private firebase: FirebaseService, private db: AngularFireDatabase, private locationService: LocationService) {
    this.items = this.firebase.read('Content/Title/' + location);

    locationService.activeLocation.subscribe(location => {
      this.items = this.firebase.read('Content/Title/' + location);
      this.items.subscribe(v => {
        this.title = v[0];
        this.subtitle = v[1];
      });
    })
  }

  ngOnInit(): void {



  }

}

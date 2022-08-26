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
  location: string = 'PL'

  constructor(private firebase: FirebaseService, private db: AngularFireDatabase, private locationService: LocationService) {
    this.locationService.activeLocation.subscribe(location => {
      this.firebase.read('Content/Title/' + location).subscribe(data => {
          this.title = data[0].Title;
          this.subtitle = data[0].Subtitle;
      });
    })
  }

  ngOnInit(): void {



  }

}

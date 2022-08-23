import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';


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

  constructor(private firebase: FirebaseService, private db: AngularFireDatabase) {
    this.items = this.firebase.read('Content/Title/' + this.location);
  }

  ngOnInit(): void {

    this.items.subscribe(v => {
      this.title = v[0];
      this.subtitle = v[1];
    });

  }

}

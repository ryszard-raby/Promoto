import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  read(collection: string):Observable<any> {
    return this.db.list(collection).valueChanges()
  }

  update(collection: string, key: string, value: any) {
    const itemRef = this.db.list(collection);
    itemRef.update(key, {value: value})
  }

  push(collection: string, value: any) {
    const itemRef = this.db.list(collection);
    itemRef.push(value);
  }

  list(collection: string):Observable<any> {
    return this.db.list(collection).valueChanges()
  }

  delete(collection: string, key: string) {
    const itemRef = this.db.list(collection);
    itemRef.remove(key)
  }
}

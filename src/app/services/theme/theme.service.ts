import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = new BehaviorSubject<any>({})

  constructor() {
    this.theme.next({mode: 'light'});
  }
}

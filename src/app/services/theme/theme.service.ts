import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = new BehaviorSubject<any>({})
  mode: any = {};
  getTheme: any = localStorage.getItem('theme');
  
  constructor() {
    this.getTheme = this.getTheme ? this.getTheme : 'light';
    this.getTheme == 'light' ? this.theme.next({light: 1}) : null
    this.getTheme == 'dark' ? this.theme.next({dark: 1}) : null

    this.theme.subscribe(theme => {
      if (theme.light)
        localStorage.setItem('theme', 'light');
      else if (theme.dark)
        localStorage.setItem('theme', 'dark');
    })
  }
}

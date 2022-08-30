import { Component, HostBinding } from '@angular/core';
import { flatMap } from 'rxjs';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'promoto';
  className = '';
  
  @HostBinding('class.theme--light') light: boolean = false;
  @HostBinding('class.theme--dark') dark: boolean = false;

  constructor (private themeService: ThemeService){
  }

  ngOnInit() {
    this.themeService.theme.subscribe(theme => {
      this.light = theme.light;
      this.dark = theme.dark;
    })
  }
}


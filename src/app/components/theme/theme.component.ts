import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  theme: any;

  constructor(private themeService: ThemeService) {
    this.themeService.theme.subscribe(mode => {
      this.theme = mode;
    })
  }

  ngOnInit(): void {

  }

  toggleTheme(){
    if (this.theme.mode == 'light')
      this.themeService.theme.next({mode: 'dark'});
    else 
      this.themeService.theme.next({mode: 'light'});
  }

}

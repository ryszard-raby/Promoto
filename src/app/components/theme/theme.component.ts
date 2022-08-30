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
    this.themeService.theme.subscribe(theme => {
      this.theme = theme;
    })
  }

  ngOnInit(): void {

  }

  toggleTheme(){
    if (this.theme.light)
      this.themeService.theme.next({dark: 1});
    else 
      this.themeService.theme.next({light: 1});
  }

}

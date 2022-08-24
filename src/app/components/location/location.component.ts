import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';

interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {

  locations: string[] = [];
  selectedLocation = '';

  constructor(private locationService: LocationService) {
    locationService.locations.subscribe(locations => {
      this.locations = locations;
    })
  
  }

  ngOnInit(): void {
  }

  selectLocation(selectedLocation: string) {
    this.locationService.activeLocation.next(selectedLocation);
  }

}

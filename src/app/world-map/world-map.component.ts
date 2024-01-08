import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  countryInfo: any = {};

  receiveCountryInfo(data: any) {
    this.countryInfo = data;
  }

}

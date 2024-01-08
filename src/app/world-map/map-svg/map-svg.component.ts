import { Component } from '@angular/core';

@Component({
  selector: 'app-map-svg',
  templateUrl: './map-svg.component.html',
  styleUrl: './map-svg.component.css'
})
export class MapSvgComponent {
  setCountryData(event: any): string {
    return event.target.id;
  }
}
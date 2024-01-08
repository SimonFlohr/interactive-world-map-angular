import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-map-svg',
  templateUrl: './map-svg.component.html',
  styleUrl: './map-svg.component.css'
})
export class MapSvgComponent {
  countryInfo: any = {};
  @Output() dataEmitter = new EventEmitter<any>();

  constructor(private apiService: ApiService) {}

  setCountryData(event: any) {
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      this.countryInfo = {
        ...data
      },
      this.dataEmitter.emit(this.countryInfo)
    });
  }
}
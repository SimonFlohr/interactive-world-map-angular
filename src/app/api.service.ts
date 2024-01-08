import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryData(isoCode: string) {
    let api = `http://api.worldbank.org/v2/country/${isoCode}?format=json`;

    return this.http.get(api);
  }

  setCountryData(isoCode: string) {
    let subject = new Subject();
    
    this.fetchCountryData(isoCode).subscribe((data: any) => {
      if (data[1]) {
        subject.next({
          countryName:    data[1][0].name,
          countryCapital: data[1][0].capitalCity,
          latitude:       `${data[1][0].latitude}`,
          longitude:      `${data[1][0].longitude}`,
          region:         data[1][0].region.value,
          incomeLevel:    data[1][0].incomeLevel.value
        });
      } else {
        subject.next({
          countryName:    "Not available"
        })
      }
      
    })

    return subject.asObservable();
  }
}

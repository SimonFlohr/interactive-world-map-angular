import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { MapSvgComponent } from './world-map/map-svg/map-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    MapSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

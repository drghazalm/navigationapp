import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'
@Component({
  selector: 'app-geolocmaps',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './geolocmaps.component.html',
  styleUrl: './geolocmaps.component.css'
})
export class GeolocmapsComponent implements OnInit{
  longitude: number; 
  latitude: number; 
  locationAvailable: boolean; 
  waitMessage: string; 
  animateInterval:any; 

  // Bindings for google-map directive
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markers: any[];

  constructor(){
    this.markers = [];
    this.center = {
      lat: 0,
      lng: 0,
    };
    this.latitude = 0;
    this.longitude = 0; 
    this.locationAvailable = false;
    this.waitMessage = "Retrieving location. Please wait";
    this.animateInterval = setInterval(() => this.animateMessage(), 500);
  }
  animateMessage(){
    this.waitMessage+=".";
  }
  click(event: google.maps.MapMouseEvent) {
    console.log(event.latLng);
  }
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
      this.locationAvailable = true;
      clearInterval(this.animateInterval);
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }
}

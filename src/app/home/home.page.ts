
import { Platform, NavController } from '@ionic/angular';
import { element } from 'protractor';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker,
  MarkerCluster
} from "@ionic-native/google-maps/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements AfterViewInit{
  @ViewChild('map',{static: false})  element;

  constructor(public googleMaps: GoogleMaps, public plt: Platform, public navCtrl: NavController) {}

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {

    let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

      let coordinates: LatLng = new LatLng(33.6396965, -84.4304574);

      let position = {
        target: coordinates,
        zoom: 17
      };

      map.animateCamera(position);

      let markerOptions: MarkerOptions = {
        position: coordinates,
        icon: "https://image.flaticon.com/icons/png/512/450/450016.png",
        title: 'Our first POI'
      };

      const marker = map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
      });



      var locations = [
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968},
        {lat: -34.671264, lng: 150.863657},
        {lat: -35.304724, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187},
        {lat: -37.774785, lng: 145.137978},
        {lat: -37.819616, lng: 144.968119},
        {lat: -38.330766, lng: 144.695692},
        {lat: -39.927193, lng: 175.053218},
        {lat: -41.330162, lng: 174.865694},
        {lat: -42.734358, lng: 147.439506},
        {lat: -42.734358, lng: 147.501315},
        {lat: -42.735258, lng: 147.438000},
        {lat: -43.999792, lng: 170.463352}
      ]
    })
  }



}

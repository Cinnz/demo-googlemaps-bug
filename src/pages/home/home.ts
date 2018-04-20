import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import {
  GoogleMaps, GoogleMap
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;

  constructor(public navCtrl: NavController,
    private platform: Platform) {

  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.loadMap();
    })
  }

  loadMap() {
    let element: HTMLElement = document.getElementById('map');

    this.map = GoogleMaps.create(element);
  }
}

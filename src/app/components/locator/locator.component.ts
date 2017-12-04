import { Component, OnInit } from '@angular/core';
import { SearchingService} from '../../services/searching.service';
import {Params, Router} from '@angular/router';
import {timeout} from 'rxjs/operator/timeout' ;
declare var google: any;
// import {google} from 'angular2-google-maps/esm/core/services/google-maps-types';
// import {google} from 'angular2-google-maps/core/services/google-maps-types';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
 export class LocatorComponent implements OnInit {

  private static storecity: any;
  static storestate: any;
  public static storecountry: any;

  city: any;
  region: any;
  country: any;
  geolocationPosition: any;
  lat: any;
  long: any;
  geocoder: any;
  latlng: any;

  constructor(private searchingService: SearchingService, private router: Router) {
   /* this.routeparams.subscribe((params: Params) => {
      console.log(params);
      this.ngOnInit();
      // this will be called every time route changes
      // so you can perform your functionality here

    });*/

   // this.router.navigate(['/locator']);

  }

  ngOnInit() {

// this.country = 'United States';
    if (window.navigator && window.navigator.geolocation) {

      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;

          console.log('here1');
          this.latlng = new google.maps.LatLng(this.lat, this.long);
          console.log('here2');
          this.geocoder = new google.maps.Geocoder();
            this.geocoder.geocode({'latLng': this.latlng}, (results, status) => {

              if (status === google.maps.GeocoderStatus.OK) {
                console.log('here3');
                if (results[1]) {
                  console.log('here4');
                  let indice = 0;
                  for (let j = 0; j < results.length; j++) {
                    if (results[j].types[0] === 'locality') {
                      indice = j;
                      break;
                    }
                  }
                  const j = indice;
                  // alert('The good number is: ' + j);
                  console.log(results[j]);

                  for (let i = 0; i < results[j].address_components.length; i++) {
                    if (results[j].address_components[i].types[0] === 'locality') {
                      console.log('A');
                      this.city = results[j].address_components[i];

                    }
                    if (results[j].address_components[i].types[0] === 'administrative_area_level_1') {
                      console.log('B');
                      this.region = results[j].address_components[i];

                    }
                    if (results[j].address_components[i].types[0] === 'country') {
                      console.log('C');
                      this.country = results[j].address_components[i];

                    }
                  }

                //  this.router.navigate(['/locator']);
                //  console.log(this.city.long_name); console.log(this.region.long_name); console.log(this.country.long_name);
                  this.country = this.country.long_name;
                  this.region = this.region.long_name;
                  this.city = this.city.long_name;
                   LocatorComponent.storecity = this.city.long_name;
                  console.log('testing' + this.country);
                   LocatorComponent.storestate = this.region.long_name;
                   LocatorComponent.storecountry = this.country;
                  // window.location.reload();

                  this.searchingService.getDetails(this.country.toString(), this.region.toString(), this.city.toString()).subscribe(detail => {
                //  this.searchingService.getDetails('United States', 'Florida', 'Tallahassee').subscribe(detail => {
                  //  this.details = detail;
                 //   console.log(detail);
                    this.searchingService.saveData(detail);

                   // this.router.navigate(['/list']);
                    //  console.log('Hai' +  this.details);
                  });

                 // alert(this.city.long_name + '' || '' + this.region.long_name + '' || '' + this.country.short_name);


                } else {
                  alert('No results found');
                }
              } else {
                alert('Geocoder failed due to: ' + status);
              }
            });

          //  console.log(this.lat + ' ' + this.long);
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        },
        {timeout: 1000}
      );
     // window.location.reload();
    }
    // this.ngOnInit();
  }

  searching() {
    this.router.navigate(['/list']);
  }
  showloc() {
  //  this.country = LocatorComponent.storecountry;
    this.router.navigate(['/locator']);
  }

  back() {
    this.router.navigate(['']);
  }

}

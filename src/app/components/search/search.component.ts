/* Search functionality page */

import { Component, OnInit } from '@angular/core';
// import { StateComponent} from '../state/state.component';
import { SearchingService} from '../../services/searching.service';
import { Router} from '@angular/router';
import {Product} from '../list/product';
// import { SharedService} from '../../services/sharedService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  public countries: string[];
  public states: any[];
  public cities: any[];
  public details: [{
    firstname: String;
    lastname: String;
    cellnumber: Number;
    homenumber: Number
    address: String;
    country: String;
    state: String;
    city: String;
  }];

   temp: String;
   selectedCountry = '';
   selectedState = '';
   selectedCity = '';

  constructor(private searchingService: SearchingService, private router: Router) {
    this.countries = [];
    this.states = [];
    this.temp = 'false';
  }

  ngOnInit() {
    // this.states = ['Florida', 'Chicago'];
    /* Populating the country dropdown by calling the service */
     this.searchingService.getCountry().subscribe( country => {
       this.countries =  country;
       // console.log(this.countries);
      // this.states = this.nextdropdown();
     });
    }

  /* Populating the state dropdown by calling the service */
  forstatedropdown() {
    this.searchingService.getState(this.selectedCountry).subscribe(state => {

       this.states = state;
    });
  }

  /* Populating the city dropdown by calling the service */
  forcitydropdown() {
    console.log('here');
    this.searchingService.getCity(this.selectedState).subscribe(city => {
      this.cities = city;
      // console.log('Hai' +  this.cities);
    });
  }

  searching() {
    /* Retrieving the user information by passing the country, state and city to the service */
    this.searchingService.getDetails(this.selectedCountry, this.selectedState, this.selectedCity).subscribe(detail => {
    //  this.details = detail;
      this.searchingService.saveData(detail);

      this.router.navigate(['/list']);
    //  console.log('Hai' +  this.details);
    });
  //   this.router.navigate(['/list', {detail: JSON.stringify(detail)}]);
  }
}

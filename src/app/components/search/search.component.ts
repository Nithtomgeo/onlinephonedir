import { Component, OnInit } from '@angular/core';
import { StateComponent} from '../state/state.component';
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
 /*  id: string;
   value: string;*/

 /* public user:User;*/
 // let countries: Array<string> = [];
 /* states: [

    ];*/

  constructor(private searchingService: SearchingService, private router: Router) {
    this.countries = [];
    this.states = [];
    this.temp = 'false';
  }

  ngOnInit() {
    // this.states = ['Florida', 'Chicago'];
     this.searchingService.getCountry().subscribe( country => {
       this.countries =  country;
       console.log(this.countries);
      // this.states = this.nextdropdown();
     });
 /*   this.searchingService.getState('USA').subscribe(state => {
      //  console.log(state + 'here');
      this.states = state;
      console.log(this.states);
    });*/
    }

  forstatedropdown() {
   // console.log(this.countries);
   // value = value.stringify();
    this.searchingService.getState(this.selectedCountry).subscribe(state => {
   //  console.log(state + 'here');
       this.states = state;
     // return 'false';
      // console.log(this.states);
     // return this.states;
//      this.states = this.searchingService.saveData(state);
    //  this.states = this.searchingService.getData();
     // console.log(this.states);
    //  console.log(this.states);
    // this.router.navigate(['/features/state']);
  //    this.states = state;
    });
  //   this.states = this.searchingService.getData();
    // console.log(this.states);
 //   return false;

   // return true;
   // return 'false';
  }
  // log(this.states);
 /*   , err => {
      console.log(err);
      return false;
    });
  }*/

  forcitydropdown() {
    console.log('here');
    this.searchingService.getCity(this.selectedState).subscribe(city => {
      this.cities = city;
      console.log('Hai' +  this.cities);
    });
  }

  searching() {
    this.searchingService.getDetails(this.selectedCountry, this.selectedState, this.selectedCity).subscribe(detail => {
    //  this.details = detail;
      this.searchingService.saveData(detail);

      this.router.navigate(['/list']);
    //  console.log('Hai' +  this.details);
    });
  //   this.router.navigate(['/list', {detail: JSON.stringify(detail)}]);
  }
}
// export const productList: Product[] = this.details;

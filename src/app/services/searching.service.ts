/* Service for the searching functionality */

import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import 'rxjs/add/operator/map';
import get = Reflect.get;
// import * as myGlobals from './globals';

@Injectable()
export class SearchingService {

   static details: [{
    firstname: string,
    lastname: string;
    cellnumber: number;
    homenumber: number
    address: string;
    country: string;
    state: string;
    city: string;
  }];

  static sbox: [{
      _id: string,
      title: string,
      description: string,
      link: string
    }];

  public sharingData: [
    string
    ];
  constructor(private http: Http) { }

  /* Get the country data from the database by calling the country api */
  getCountry() {
    const headers = new Headers();
     headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/countrys/searchcountry', {headers: headers})
      .map(res => res.json());
  }

  /* Get the state data from the database by calling the state api */
  getState(value) {
    const headers = new Headers();
    const params: URLSearchParams = new URLSearchParams();
    params.set('param1', value.toString());
    headers.append('Content-Type', 'application/json');
  /*  const Obj = {
      headers: headers,
      search: value
    }*/
   // console.log('here');
    const urlvar = 'http://localhost:3000/states/searchstate/' + value;
    console.log(urlvar);
    return this.http.get('http://localhost:3000/states/searchstate/' + value, {headers: headers})
      .map(res => res.json());
  }

  /* Get the city data from the database by calling the city api */
  getCity(value) {
    const headers = new Headers();
    const params: URLSearchParams = new URLSearchParams();
    headers.append('Content-Type', 'application/json');
    params.set('param1', value.toString());
    return this.http.get('http://localhost:3000/citys/searchcity/' + value, {headers: headers})
      .map(res => res.json());
  }

  /* Common storage area to save the details so that other page can retrieve the information from it */
   saveData(share) {
    // console.log('save data function called' + str + this.sharingData.name);
    SearchingService.details = share;
  //  console.log(SearchingService.details);
   // console.log(share[0].lastname);
 //   console.log(this.details[0].lastname);
 //   console.log(this.sharingData);
   // return this.sharingData;

  //  console.log(this.sharingData + 'sharingdata');
   }

  /* Common storage area to load the details saved by other page */
  getData() {
    console.log('hey' + SearchingService.details);
  //  console.log('Hai' + this.sharingData);
    // console.log('get data function called');
    return SearchingService.details;
  }

  getSearchBox(value) {
   const headers = new Headers();
   const params: URLSearchParams = new URLSearchParams();
   headers.append('Content-Type', 'application/json');
    params.set('param1', value.toString());
   console.log(value);
   return this.http.get('http://localhost:3000/searchboxes/searchbox/' + value, {headers: headers})
     .map(res => res.json());
  }

  saveBox(boxval) {
     console.log(boxval.search);
     SearchingService.sbox = boxval.search;
    // SearchingService.sbox = boxval.search;
  //  console.log('here' + SearchingService.sbox[0].title);
  }

  getBox() {

    return SearchingService.sbox;
  }
  getDetails(value1, value2, value3) {
    const headers = new Headers();
    const params: URLSearchParams = new URLSearchParams();
    headers.append('Content-Type', 'application/json');
    params.set('param1', value1.toString());
    // console.log(value1 + 'ha ' + value2 + ' hu ' + value3);
    return this.http.get('http://localhost:3000/adddetails/searchuser/' + value1 + '/' + value2 + '/' + value3, {headers: headers})
      .map(res => res.json());
  }
}

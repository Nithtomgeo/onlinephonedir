/* Service for the add detail functionality page */

import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdddetailService {

  constructor(private http: Http) { }

  /* Calls the add details api */
  UserInfo(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/adddetails/infoadd', user, {headers: headers})
      .map(res => res.json());
  }

  /* Calls the country api to add country */
  AddCountry(info) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/countrys/country', info, {headers: headers})
      .map(res => res.json());
  }

  /* Calls the state api to add state */
  AddState(info) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/states/state', info, {headers: headers})
      .map(res => res.json());
  }

  /* Calls the city api to add the city */
  AddCity(info) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/citys/city', info, {headers: headers})
      .map(res => res.json());
  }

}

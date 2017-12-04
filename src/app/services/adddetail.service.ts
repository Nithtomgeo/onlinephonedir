import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdddetailService {

  constructor(private http: Http) { }

  UserInfo(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/adddetails/infoadd', user, {headers: headers})
      .map(res => res.json());
  }

  AddCountry(info) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/countrys/country', info, {headers: headers})
      .map(res => res.json());
  }

  AddState(info) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/states/state', info, {headers: headers})
      .map(res => res.json());
  }

  AddCity(info) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/citys/city', info, {headers: headers})
      .map(res => res.json());
  }

}

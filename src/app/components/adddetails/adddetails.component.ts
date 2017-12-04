import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdddetailService} from '../../services/adddetail.service';
import { SearchingService} from '../../services/searching.service';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {

  firstname: string;
  lastname: string;
  cellnumber: number;
  homenumber: number;
  address: string;
  country: string;
  state: string;
  city: string;

  public countries: string[];
  public states: any[];
  public cities: any[];

  selectedCountry = 'Add Country';
  selectedState = 'Add State';
  selectedCity = 'Add City';

  Country = 'Add Country';
  State = 'Add State';
  City = 'Add City';

  flag;
  /*public countries = [
    {
      value: 'australia', display: 'Australia'
    },
    {
      value: 'america', display: 'America'
    }
  ]

  public states = [
    {
      value: 'florida', display: 'Florida'
    },
    {
      value: 'ohio', display: 'Ohio'
    }
  ]

  public cities = [
    {
      value: 'tallahassee', display: 'Tallahassee'
    },
    {
      value: 'miami', display: 'Miami'
    }
  ]
*/
  constructor(private router: Router, private adddetail: AdddetailService, private searchingService: SearchingService) {
    this.countries = [];
    this.states = [];
  }

  clicked() {
    this.flag = true;
    this.router.navigate(['/submitmodal']);
  }

  OnSubmit() {
console.log('it came here');
    if (!(this.Country === 'Add Country')) {
      console.log('here1');
      const info = {
        name : 'Country',
        countries : this.Country,
       // Ci : this.City
    };
      this.adddetail.AddCountry(info).subscribe(data => {
        if (data.success) {
          // this.flashMessage.show('User has been registered', {cssClass: 'alert-success', timeout: 3000});
          console.log('Done Country');
        }
      });
      this.selectedCountry = this.Country;
    }
    if (!(this.State === 'Add State')) {
      const info = {
        name: this.selectedCountry,
        states : this.State,
      // Ci : this.City,
    };
        this.adddetail.AddState(info).subscribe(data => {
          if (data.success) {
            // this.flashMessage.show('User has been registered', {cssClass: 'alert-success', timeout: 3000});
            console.log('Done State');
          }
        });
      this.selectedState = this.State;
    }
    if (!(this.City === 'Add City')) {
      const info = {
            name : this.selectedState,
            citys : this.City
    };
        this.adddetail.AddCity(info).subscribe(data => {
          if (data.success) {
            // this.flashMessage.show('User has been registered', {cssClass: 'alert-success', timeout: 3000});
            console.log('Done City');
          }
        });
      this.selectedCity = this.City;
    }
    const userInfo = {
      firstname: this.firstname,
      lastname: this.lastname,
      cellnumber: this.cellnumber,
      homenumber: this.homenumber,
      address: this.address,
 /*     country: this.country,
      state: this.state,
      city: this.city*/
      country: this.selectedCountry,
      state: this.selectedState,
      city: this.selectedCity
    };

    this.adddetail.UserInfo(userInfo).subscribe(data => {
      if (data.success) {
       // this.flashMessage.show('User has been registered', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/submitmodal']);
      }
    });

  }


  ngOnInit() {
  //  if (!(this.selectedCountry === 'Country Not Listed')) {
      this.searchingService.getCountry().subscribe(country => {
        this.countries = country;
        console.log(this.countries);
        // this.states = this.nextdropdown();
      });
    // }
  }

  forstatedropdown() {
    // console.log(this.countries);
    // value = value.stringify();
    if (!(this.selectedCountry === 'Country Not Listed')) {
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
    }
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
    if (!(this.selectedState === 'State Not Listed')) {
      console.log('here');
      this.searchingService.getCity(this.selectedState).subscribe(city => {
        this.cities = city;
        console.log('Hai' + this.cities);
      });
    }
  }
}

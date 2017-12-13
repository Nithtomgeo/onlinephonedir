/* Features page that contain the search and add details data */

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  opt: string;

  constructor(private router: Router) {}

  searching() {
    this.router.navigate(['/list']);
  }

   showSelected() {
    // console.log('hello');
      if (this.opt === 'adddetails') {
       // this.opt = null;
        this.router.navigate(['features/adddetails']);
        return true;
      } else if (this.opt === 'search') {
      //  this.opt = null;
        this.router.navigate(['features/search']);
        return true;
      }
   }

  ngOnInit() {
  }
}

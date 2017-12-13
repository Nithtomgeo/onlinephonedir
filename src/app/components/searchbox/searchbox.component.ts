/* Search box functionality */

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SearchingService} from '../../services/searching.service';

@Component ({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  public data;

  constructor(private searchingService: SearchingService, private router: Router) {

    this.data = this.searchingService.getBox();
    console.log(this.data);
  }

  ngOnInit() {
    this.data = this.searchingService.getBox();
  }

}

import { Component, OnInit } from '@angular/core';
import {CityComponent} from '../city/city.component';
import {SearchComponent} from '../search/search.component';
import {SearchingService} from '../../services/searching.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  states: [

    String
  ]
  constructor(private searchingService: SearchingService) {}


  ngOnInit() {
    // this.states = this.searchingService.getData();
  //  this.states = states;
  }
}

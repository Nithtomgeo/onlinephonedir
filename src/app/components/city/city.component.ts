import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor() { }

  public cities = [
    {
      value: 'tallahassee', display: 'Tallahassee'
    },
    {
      value: 'miami', display: 'Miami'
    }
  ]

  ngOnInit() {
  }

}

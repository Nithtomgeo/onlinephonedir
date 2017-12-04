import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submitmodal',
  templateUrl: './submitmodal.component.html',
  styleUrls: ['./submitmodal.component.css']
})
export class SubmitmodalComponent implements OnInit {

  constructor(private routes: Router) { }

  redirect() {
    this.routes.navigate(['/']);
  }
  ngOnInit() {
  }

}

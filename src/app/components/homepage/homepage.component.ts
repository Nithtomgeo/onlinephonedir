import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class NavbarComponent {

  homepage;
  constructor(private router: Router, public authService: AuthService) {}

  /*ngOnInit() {
  }*/

}

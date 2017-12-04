import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: {
    firstname: String;
    lastname: String;
    email: String;
    phonenumber: Number;
    address: String;
  }
  constructor(private router: Router, private flashMessage: FlashMessagesService,
              private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.getProfile().subscribe( profile => {
        this.user =  profile.user;
    }, err => {
        console.log(err);
        return false;
    });
    }
}

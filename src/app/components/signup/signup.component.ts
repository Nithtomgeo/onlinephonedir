/* Sign up Page */

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: String;
  lastname: String;
  email: String;
  /*reenteremail: String;*/
  password: String;
  phonenumber: number;
  address: String;
  month: String;
  day: String;
  year: String;
  male: String;
  female: String

  constructor(private validateService: ValidateService, private router: Router,
              private flashMessage: FlashMessagesService, private authservice: AuthService ) { }

  gosignin() {
    this.router.navigate(['/signin']);
}
  ngOnInit() {
  }
  onRegisterSubmit() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      /*reenteremail: this.reenteremail,*/
      password: this.password,
      phonenumber: this.phonenumber,
      address: this.address
    };

    /* Calling the validate service */
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please enter a valid email address', {cssClass: 'alert-danger', timeout: 3000});
    }

    /* Calling the authenticate service */
    this.authservice.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('User has been registered', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/signin']);
      } else {
        this.flashMessage.show('OOPS...Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/signup']);
      }
    });
  }
}

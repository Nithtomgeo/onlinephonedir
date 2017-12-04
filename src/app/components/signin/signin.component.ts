import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {isDefined} from "@angular/compiler/src/util";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  flag: boolean;
  email: String;
  password: String
  constructor(private router: Router, private validateService: ValidateService,
              private flashMessage: FlashMessagesService, private authService: AuthService) {

    this.flag = false;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    console.log('Hai' + captchaResponse);

    if (captchaResponse != null) {
      this.flag = true;
      console.log(this.flag);
    }
  }

 /* enableBtn() {
   // const val = document.getElementById('btn1');

  //  console.log(this.flag);

  }*/

  featurepage() {
    this.router.navigate(['/features']);
  }

  ngOnInit() {
  }

  onLoginSubmit() {

    const loguser = {
      email: this.email,
      password: this.password,
    //  captcha: this.g-recaptcha-response
    }
    if (!this.validateService.validateRegister(loguser)) {
      this.flashMessage.show('Please enter email id and password', {cssClass: 'alert-danger', timeout: 3000});
    }

    if (!this.validateService.validateEmail(loguser.email)) {
      this.flashMessage.show('Please enter a valid email address', {cssClass: 'alert-danger', timeout: 3000});
    }
    this.authService.authenticateUser(loguser).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You have logged in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/features']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/signin']);
      }
    });

  }
}

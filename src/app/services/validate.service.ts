/* Service to validate the user data*/

import { Injectable } from '@angular/core';
/*import {isDefined} from "@angular/compiler/src/util";*/

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if ((user.email === undefined) || (user.password === undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    if (!(email === undefined)) {
    const condition = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return condition.test(email);
  } else {
      return true;
    }
  }
}

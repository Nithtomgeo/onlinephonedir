import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {routes} from './app.router';
import {ValidateService} from './services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import {SearchingService} from './services/searching.service';
/*import {Ng4DropdownModule} from 'ng4-material-dropdown';*/

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*templateUrl: '<router-outlet></router-outlet>',*/
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
  Searchbox: String;

  public details: [{
    title: String;
    link: String;
    description: String;
  }];

  constructor(private router: Router, private validateService: ValidateService, private searchingService: SearchingService,
              private flashMessage: FlashMessagesService, public authService: AuthService) { }

  onSubmit() {
    console.log(this.Searchbox);
    this.searchingService.getSearchBox(this.Searchbox).subscribe(detail => {

      if (detail != null) {
        this.searchingService.saveBox(detail);
        this.router.navigate(['/searchbox']);
      }
      this.details = detail;
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are now logged out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['']);
    return false;
  }
}

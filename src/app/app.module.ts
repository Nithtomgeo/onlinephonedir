import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.router';

import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
import {CommonModule} from '@angular/common';
import { NavbarComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { FeaturesComponent } from './components/features/features.component';
import { SearchComponent } from './components/search/search.component';
import { AdddetailsComponent } from './components/adddetails/adddetails.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { StateComponent } from './components/state/state.component';
import { CityComponent } from './components/city/city.component';
import { ListComponent } from './components/list/list.component';
import { SubmitmodalComponent } from './components/submitmodal/submitmodal.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ValidateService} from './services/validate.service';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { AuthService} from './services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuard} from './guards/auth.guard';
import { SearchingService} from './services/searching.service';
import { AdddetailService} from './services/adddetail.service';
import {ModalModule} from 'ng2-modal';
import { LocatorComponent } from './components/locator/locator.component';
import { RecaptchaModule} from 'ng-recaptcha';
// import { Ng2TableModule } from 'ng2-table/ng2-table';
import { DataTableModule} from 'angular2-datatable';
import { DataFilterPipe} from './components/list/data-filter-pipe';

import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import {Ng4DropdownModule} from 'ng4-material-dropdown';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
// import { SharedService} from './services/sharedService';

/*import { DataTableModule } from 'angular-2-data-table';*/

/*import {MaterialModule, MdDialogModule} from '@angular/material';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';*/

/*import {MdDialog} from '@angular/material';
import {MdDialogRef} from '@angular/material';*/
/*import { Ng4DropdownModule } from 'ng4-material-dropdown';*/


@NgModule({
  declarations: [
    AppComponent, CoursesComponent, AuthorComponent, NavbarComponent, SignupComponent, SigninComponent,
    FeaturesComponent, SearchComponent, AdddetailsComponent, StateComponent, CityComponent, ListComponent,
    SubmitmodalComponent, ProfileComponent, LocatorComponent, DataFilterPipe, SearchboxComponent
  ],
  imports: [ BrowserModule, routes, BsDropdownModule.forRoot(), FormsModule, HttpModule, BootstrapModalModule,
    FlashMessagesModule, ModalModule, DataTableModule, RecaptchaModule.forRoot()
    /*, DataTableModule*/ ],
  providers: [ValidateService, AuthService, AuthGuard, SearchingService, AdddetailService, ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

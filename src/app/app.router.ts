/* The component that specifies the routes to each page */

import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent} from './app.component';
import { SignupComponent} from './components/signup/signup.component';
import { SigninComponent} from './components/signin/signin.component';
import {NavbarComponent} from './components/homepage/homepage.component';
import {FeaturesComponent} from './components/features/features.component';
import {ListComponent} from './components/list/list.component';
import {SubmitmodalComponent} from './components/submitmodal/submitmodal.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './guards/auth.guard';
import {SearchComponent} from './components/search/search.component';
import {AdddetailsComponent} from './components/adddetails/adddetails.component';
import {LocatorComponent} from './components/locator/locator.component';
import {SearchboxComponent} from './components/searchbox/searchbox.component';

export const router: Routes = [
  {
    path: '', component: NavbarComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'features', component: FeaturesComponent, canActivate: [AuthGuard],
    children: [
      { path: 'search', component: SearchComponent},
        //  path: 'state', component: StateComponent,
      { path: 'adddetails', component: AdddetailsComponent }
    ]
  },
  {
    path: 'locator', component: LocatorComponent
  },
  {
    path: 'list', component: ListComponent  , canActivate: [AuthGuard]
  },
  {
    path: 'submitmodal', component: SubmitmodalComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'searchbox', component: SearchboxComponent, canActivate: [AuthGuard]
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

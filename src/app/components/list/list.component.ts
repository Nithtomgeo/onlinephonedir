/* Component that will list the user details */

import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {SearchingService} from '../../services/searching.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public data;
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'email';
  public sortOrder = 'asc';

  /* Fetching the details from the service */
  constructor(private searchingService: SearchingService, private router: Router) {
    setTimeout(() => {
      this.data = this.searchingService.getData();

    }, 1000);
  }

  public toInt(num: string) {
    return +num;
  }

  back() {
    this.router.navigate(['/features/search']);
  }
}

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

  constructor(private searchingService: SearchingService, private router: Router) {
    setTimeout(() => {
      this.data = this.searchingService.getData();
        /*[
        { 'name': 'Jayme',
          'email': 'a.nunc.In@convallisante.ca',
          'regDate': '2016-02-07T10:22:09-08:00',
          'city': 'Ville de Maniwaki',
          'age': 30},
        { 'name': 'Mane',
          'email': 'a.nunc.In@convallisante.ca',
          'regDate': '2016-02-07T10:22:09-08:00',
          'city': 'Ville de Maniwaki',
          'age': 30},
        { 'name': 'Kristie',
          'email': 'a.nunc.In@convallisante.ca',
          'regDate': '2016-02-07T10:22:09-08:00',
          'city': 'Ville de Maniwaki',
          'age': 30},
        { 'name': 'Ahmed',
          'email': 'a.nunc.In@convallisante.ca',
          'regDate': '2016-02-07T10:22:09-08:00',
          'city': 'Ville de Maniwaki',
          'age': 30},
        { 'name': 'WInster',
          'email': 'a.nunc.In@convallisante.ca',
          'regDate': '2016-02-07T10:22:09-08:00',
          'city': 'Ville de Maniwaki',
          'age': 30}
        ];*/
    }, 1000);
  }
 /* ngOnInit(): void {
    this.http.get('list/data.json')
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 1000);
      });
  }*/

  public toInt(num: string) {
    return +num;
  }

  /*public sortByWordLength = (a: any) => {
    return a.city.length;
  }*/
  back() {
    this.router.navigate(['/features/search']);
  }
}




/*
import { Component, OnInit } from '@angular/core';
import { TableData } from './table-data';

// webpack html imports
// const template = require('./table-demo.html');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {
      title: 'Position',
      name: 'position',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
    {title: 'Start date', className: 'text-warning', name: 'startDate'},
    {title: 'Salary ($)', name: 'salary'}
  ];
  public page = 1;
  public itemsPerPage = 10;
  public maxSize = 5;
  public numPages = 1;
  public length = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<any> = TableData;

  public constructor() {
    this.length = this.data.length;
  }

  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}


/!*
import { Component, OnInit } from '@angular/core';
/!*import { DataTableResource } from 'angular-2-data-table';*!/
import {Product} from './Product';
// import {SearchingService} from '../../services/searching.service';
// import {productList} from './data';
 import {SearchingService} from '../../services/searching.service';
import { Router} from '@angular/router';
 // import {productList} from '../../search/';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
//  providers: [SearchingService]
})
export class ListComponent implements OnInit {

  filteredItems: Product[];
  pages: number;
  pageSize: number;
  pageNumber: number;
  currentIndex: number;
  items: Product[];
  pagesIndex: Array<number>;
  pageStart: number;
  inputName: '';
  obj;
  index;

  constructor(private searchingService: SearchingService, private router: Router ) {
    // this.filteredItems = productList;
   // this.init();
    // this.filteredItems = this.searchingService.getData();
/!*    console.log('hello' + this.searchingService.getData());
    console.log('hello' + this.filteredItems[0].lastname);
    console.log('hello' + this.filteredItems[0].country);
    console.log('hello' + this.filteredItems[0].state);
    console.log('hello' + this.filteredItems[0].city);
    console.log('hello' + this.filteredItems[0].address);
    console.log('hello' + this.filteredItems[0].cellnumber);
    console.log('hello' + this.filteredItems[0].homenumber);*!/
    // this.init();
  }

  init() {
    /!*console.log('Hai here1');
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;
    this.pageSize = 5;
    this.pageNumber = 0;
    this.currentIndex = 1;

    this.pageNumber = parseInt ('' + (this.filteredItems.length / this.pageSize), 100);
    if (this.filteredItems.length % this.pageSize !== 0) {
      this.pageNumber ++;
    }

    if (this.pageNumber  < this.pages) {
      this.pages =  this.pageNumber;
    }

    this.refreshItems();
    console.log('this.pageNumber :' + this.pageNumber);*!/
  }

  FilterByName() {
    this.filteredItems = [];
    if (this.inputName !== '') {
      this.searchingService.getData().forEach(element => {
        if (element.firstname.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.filteredItems.push(element);
        }
      });
    }else {
      this.filteredItems = this.searchingService.getData();
      console.log('hello' + this.filteredItems[0].firstname);
    }
    console.log(this.filteredItems);
    console.log('hello' + this.filteredItems[0].firstname);
    this.ngOnInit();
  }
  fillArray(): any {
    this.obj = new Array();
    for (this.index = this.pageStart; this.index < this.pageStart + this.pages; this.index ++) {
      this.obj.push(this.index);
    }
    return this.obj;
  }
  refreshItems() {
    this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    console.log('A ' + this.items[0].firstname);
    this.pagesIndex =  this.fillArray();
  }
  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex --;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }
  nextPage() {
    if (this.currentIndex < this.pageNumber) {
      this.currentIndex ++;
    }
    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }
  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }
  ngOnInit() {
    this.filteredItems = this.searchingService.getData();
    console.log('Hai here1');
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;
    this.pageSize = 5;
    this.pageNumber = 0;
    this.currentIndex = 1;

    this.pageNumber = parseInt ('' + (this.filteredItems.length / this.pageSize), 100);
    if (this.filteredItems.length % this.pageSize !== 0) {
      this.pageNumber ++;
    }

    if (this.pageNumber  < this.pages) {
      this.pages =  this.pageNumber;
    }

    this.refreshItems();
    console.log('this.pageNumber :' + this.pageNumber);
  }

  back() {
    this.router.navigate(['/features/search']);
  }
}
*!/
*/

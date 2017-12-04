"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var ListComponent = (function () {
    function ListComponent() {
        this.filteredItems = data_1.productList;
        this.init();
    }
    ListComponent.prototype.init = function () {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageNumber = parseInt('' + (this.filteredItems.length / this.pageSize), 100);
        if (this.filteredItems.length % this.pageSize !== 0) {
            this.pageNumber++;
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log('this.pageNumber :' + this.pageNumber);
    };
    ListComponent.prototype.FilterByName = function () {
        var _this = this;
        this.filteredItems = [];
        if (this.inputName !== '') {
            data_1.productList.forEach(function (element) {
                if (element.firstname.toUpperCase().indexOf(_this.inputName.toUpperCase()) >= 0) {
                    _this.filteredItems.push(element);
                }
            });
        }
        else {
            this.filteredItems = data_1.productList;
        }
        console.log(this.filteredItems);
        this.init();
    };
    ListComponent.prototype.fillArray = function () {
        this.obj = new Array();
        for (this.index = this.pageStart; this.index < this.pageStart + this.pages; this.index++) {
            this.obj.push(this.index);
        }
        return this.obj;
    };
    ListComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    ListComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    ListComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    ListComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.css']
    })
], ListComponent);
exports.ListComponent = ListComponent;

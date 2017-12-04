"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(firstname, lastname, country, state, city, address, homenumber, cellnumber) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
        this.state = state;
        this.city = city;
        this.address = address;
        this.homenumber = homenumber;
        this.cellnumber = cellnumber;
    }
    return Product;
}());
exports.Product = Product;

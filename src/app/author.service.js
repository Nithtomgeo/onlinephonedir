"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthorService = (function () {
    function AuthorService() {
    }
    AuthorService.prototype.getAuthor = function () {
        return ['author1', 'author2', 'author3'];
    };
    return AuthorService;
}());
exports.AuthorService = AuthorService;

import {Component} from '@angular/core';
import {AuthorService} from './author.service';

@Component ({
    selector: 'app-author',
    template: `<h2>Author</h2>
    {{title}}
    <ul>
      <li *ngFor ="let author of authors">
        {{author}}
      </li>
    </ul>`,
    providers: [AuthorService]
})

export class AuthorComponent {
   title = 'Authors list';
   authors;

   constructor(authorService: AuthorService) {
      this.authors = authorService.getAuthor();
   }
}

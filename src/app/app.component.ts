import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  book: Book = {
    title: 'Moby Dick',
    author: 'Herman Melville',
    abstract: 'Lorem ipsum dolor sit amet'
  }

  goToBookDetails(book: Book): void {
    console.log(book)
  }
}

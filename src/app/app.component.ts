import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  books: Book[] = [
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      abstract: 'Lorem ipsum dolor sit amet',
    },
    {
      title: '1984',
      author: 'George Orwell',
      abstract: 'World goes bad',
    },
  ];

  searchTerm = ''

  goToBookDetails(book: Book): void {
    console.log(book);
  }

  updateBookSearchTerm(event: Event): void {
    const input = event.target as HTMLInputElement
    this.searchTerm = input.value
  }
}

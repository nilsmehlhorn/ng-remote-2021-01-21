import { Component, OnInit } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

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

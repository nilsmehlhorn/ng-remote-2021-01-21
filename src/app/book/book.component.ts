import { Component, OnInit } from '@angular/core';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  books: Book[]

  searchTerm = ''

  constructor(private bookApi: BookApiService) {
    this.books = this.bookApi.getBooks();
  }

  goToBookDetails(book: Book): void {
    console.log(book);
  }

  updateBookSearchTerm(event: Event): void {
    const input = event.target as HTMLInputElement
    this.searchTerm = input.value
  }
}

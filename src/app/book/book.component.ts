import { Component } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  books: Book[] = []

  searchTerm = ''

  loading = false

  constructor(private bookApi: BookApiService) {
    this.loading = true
    this.bookApi.getBooks().pipe(
      delay(3000),
      finalize(() => this.loading = false)
    ).subscribe(booksFromApi => {
      this.books = booksFromApi
    })
  }

  goToBookDetails(book: Book): void {
    console.log(book);
  }

  updateBookSearchTerm(event: Event): void {
    const input = event.target as HTMLInputElement
    this.searchTerm = input.value
  }
}

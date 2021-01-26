import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { delay, finalize, takeUntil } from 'rxjs/operators';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  searchTerm = '';

  loading = false;

  private onDestroy = new Subject();

  constructor(private bookApi: BookApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.bookApi
      .getBooks()
      .pipe(
        delay(3000),
        finalize(() => (this.loading = false)),
        takeUntil(this.onDestroy),
      )
      .subscribe((booksFromApi) => {
        this.books = booksFromApi;
      });
  }
  
  ngOnDestroy(): void {
    this.onDestroy.next()
  }

  goToBookDetails(book: Book): void {
    console.log(book);
  }

  updateBookSearchTerm(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }
}

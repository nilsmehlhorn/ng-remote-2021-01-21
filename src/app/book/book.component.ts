import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';
import { delay, finalize, share, takeUntil } from 'rxjs/operators';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

interface Storage {

}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]> = EMPTY;

  searchTerm = '';

  loading = false;

  private onDestroy = new Subject();

  constructor(private bookApi: BookApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.books$ = this.bookApi
      .getBooks()
      .pipe(
        delay(3000),
        finalize(() => (this.loading = false))
      )
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

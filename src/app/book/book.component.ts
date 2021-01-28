import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BookApiService } from './book-api.service';
import { Book } from './models/book';

interface Storage {}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books$: Observable<Book[]> = EMPTY;

  searchTerm = '';

  constructor(private bookApi: BookApiService, private router: Router) {}

  ngOnInit(): void {
    this.books$ = this.bookApi.getBooks().pipe(delay(1000));
  }

  goToBookDetails(book: Book): void {
    this.router.navigate(['/books', book.isbn])
  }

  updateBookSearchTerm(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }
}

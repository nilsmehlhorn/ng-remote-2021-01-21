import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, pipe, Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book: Book | undefined;

  private destroy$ = new Subject();

  constructor(private route: ActivatedRoute, private bookApi: BookApiService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => this.bookApi.getBookByIsbn(params.isbn)),
        takeUntil(this.destroy$)
      )
      .subscribe((book) => {
        this.book = book;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}

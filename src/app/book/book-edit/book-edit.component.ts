import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: Book | undefined;
  bookApiSubscription = Subscription.EMPTY;

  constructor(private route: ActivatedRoute, private bookApi: BookApiService) {}

  ngOnInit(): void {
    this.bookApiSubscription = this.route.params
      .pipe(switchMap((params) => this.bookApi.getBookByIsbn(params?.isbn)))
      .subscribe((bookFromApi) => (this.book = bookFromApi));
  }

  save(): void {
    console.log(this.book)
  }

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
  }

}

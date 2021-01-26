import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './models/book';

@Injectable()
export class BookApiService {
  private books: Book[] = [
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

  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }
}

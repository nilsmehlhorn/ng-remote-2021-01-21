import { Injectable } from '@angular/core';
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

  getBooks(): Book[] {
    return this.books;
  }
}

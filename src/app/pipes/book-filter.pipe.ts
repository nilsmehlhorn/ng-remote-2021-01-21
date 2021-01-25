import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], searchTerm: string): Book[] {
    if (!searchTerm) {
      return books;
    }
    const lowercased = searchTerm.toLowerCase();
    const predicate = ({ title, abstract, author }: Book): boolean => {
      return (
        title.toLowerCase().includes(lowercased) ||
        abstract.toLowerCase().includes(lowercased) ||
        author.toLowerCase().includes(lowercased)
      );
    }
    return books.filter(predicate);
  }
}

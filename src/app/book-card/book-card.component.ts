import { Component, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  @Input() content: Book | undefined;

  constructor() { }

  handleDetailClick(event: MouseEvent): void {
    event.preventDefault();
    console.log(event)
  }

}

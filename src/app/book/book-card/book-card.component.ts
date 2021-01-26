import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnChanges {

  @Input() content: Book | undefined;

  @Output() detailClick = new EventEmitter<Book>();

  constructor() { }

  handleDetailClick(event: MouseEvent): void {
    event.preventDefault();
    this.detailClick.emit(this.content)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change', changes)
  }

}

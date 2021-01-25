import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookComponent } from './book.component';
import { BookFilterPipe } from './pipes/book-filter.pipe';

@NgModule({
  declarations: [BookComponent, BookCardComponent, BookFilterPipe],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}

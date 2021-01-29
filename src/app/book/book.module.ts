import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookApiService } from './book-api.service';
import { BookCardComponent } from './book-card/book-card.component';
import { BookComponent } from './book.component';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  declarations: [BookComponent, BookCardComponent, BookFilterPipe, BookDetailComponent, BookEditComponent, BookNewComponent],
  imports: [CommonModule, BookRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [BookComponent],
  providers: [BookApiService]
})
export class BookModule {}

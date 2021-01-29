import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  form: FormGroup

  loading = false;

  constructor(fb: FormBuilder, private bookApi: BookApiService, private router: Router) {
    this.form = fb.group({
      title: ['', [Validators.required]],
      numPages: ['0', Validators.min(1)]
    })
   }

  ngOnInit(): void {
  }

  save(book: Partial<Book>): void {
    this.loading = true;
    this.bookApi.saveBook(book).pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => {
      this.router.navigate(['/books'])
    })
  }

}

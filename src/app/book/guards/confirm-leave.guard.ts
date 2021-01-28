import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmLeaveGuard implements CanDeactivate<BookDetailComponent> {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return this.document.defaultView?.confirm('Leave page?') ?? true;
  }
}

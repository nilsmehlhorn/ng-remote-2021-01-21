import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmLeaveGuard } from './guards/confirm-leave.guard';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmLeaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailComponent } from "./book/book-detail/book-detail.component";
import { BookComponent } from "./book/book.component";
import { AboutComponent } from "./components/about/about.component";
import { ConfirmLeaveGuard } from "./confirm-leave.guard";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/books'
    },
    {
        path: 'books',
        loadChildren: () => import('./book/book.module').then(m => m.BookModule)
    },
    {
        path: 'about',
        component: AboutComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
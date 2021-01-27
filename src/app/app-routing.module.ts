import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailComponent } from "./book/book-detail/book-detail.component";
import { BookComponent } from "./book/book.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/books'
    },
    {
        path: 'books',
        component: BookComponent
    },
    {
        path: 'books/details/:isbn',
        component: BookDetailComponent
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
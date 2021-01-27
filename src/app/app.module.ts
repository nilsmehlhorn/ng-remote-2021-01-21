import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BookModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

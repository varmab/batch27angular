import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LibraryModule } from '../library/library.module'

import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome.component'
import { FriendsComponent } from './friends.component'
import { HelloComponent } from './hello.component'
import { GreetingComponent } from './greeting.component'

import { BooksLibraryComponent } from './bookslibrary.component';
import { BookListComponent } from './booklist.component';
import { WishListComponent } from './wishlist.component';
import { BookComponent } from './book.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    FriendsComponent,
    HelloComponent,
    GreetingComponent,
    BooksLibraryComponent,
    BookListComponent,
    WishListComponent,
    BookComponent
  ]
})
export class AppModule {}
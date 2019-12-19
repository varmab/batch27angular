import { NgModule } from '@angular/core';

import { BooksLibraryComponent } from './bookslibrary.component';
import { BookListComponent } from './booklist.component';
import { WishListComponent } from './wishlist.component';
import { BookComponent } from './book.component';

@NgModule({
    declarations:[
        BooksLibraryComponent,
        BookListComponent,
        WishListComponent,
        BookComponent
    ],
    imports:[],
})
export class LibraryModule{

}
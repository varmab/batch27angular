import { Component, Input } from '@angular/core'
import { IBook } from './book.interface'

@Component({
    selector:'booklist',
    template:`
        <h1>Book List</h1>
        <book *ngFor="let book of books" [book]="book"></book>
    `
})
export class BookListComponent{
    @Input()
    books:IBook[];
}
import { Component, Input } from '@angular/core'
import { IBook } from './book.interface'

@Component({
    selector:'book',
    template:`
        <h1>Book</h1>
        <div>
            {{ book.title }}
            {{ book.author }}
        </div>
    `
})
export class BookComponent{
    @Input()
    book:IBook;
}
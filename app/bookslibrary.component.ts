import { Component } from '@angular/core'
import { IBook } from './book.interface'

@Component({
    selector:'bookslibrary',
    template:`
    <h1>BooksLibrary</h1>
    <booklist [books]="books"></booklist>
    <wishlist [wishlistBooks]="wishlist"></wishlist>
    `
})
export class BooksLibraryComponent{
    // books:string[]=[
    //     "JS Fundamentals",
    //     "React Pro",
    //     "Node in action"
    // ]

    books:IBook[]=[
        {
            id:1,
            title:"JS Fundamentals",
            author:"John"
        },
        {
            id:2,
            title:"React Pro",
            author:"David"
        }
    ]

    wishlist:string[]=["React Pro"]
}
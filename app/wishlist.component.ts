import { Component, Input } from '@angular/core'

@Component({
    selector:'wishlist',
    template:`
        <h1>Wish List</h1>
        <ul>
            <li *ngFor="let book of wishlistBooks">
                {{book}}
            </li>
        </ul>
    `
})
export class WishListComponent{
    @Input()
    wishlistBooks:string[];
}
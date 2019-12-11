import {Component} from '@angular/core'

@Component({
    selector:'greeting',
    template:`
        <h1>Happy New Year, {{ name }}</h1>
        <input type="text" [value]="name"/>
        <button (click)="updateName($event)">Update Name</button>
    `
})
export class GreetingComponent{
    name:string="Varma"

    updateName(){
        this.name="Ram";
    }
}
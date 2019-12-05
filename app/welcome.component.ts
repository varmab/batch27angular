import { Component } from '@angular/core'

@Component({
    selector:'welcome',
    template:`
    <div>
        Welcome to 
        
       <br/>
        Enter name
        <input type="text" [(ngModel)]="name"  #username/>
        {{username.value}}
    </div>
    `
})
export class WelcomeComponent {
    name:string="Varma";

}
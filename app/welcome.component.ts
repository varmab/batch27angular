import { Component } from '@angular/core'

@Component({
    selector: 'welcome',
    template: `
    <div>
        Welcome to {{ name | lowercase }}
        {{ promise | async }}
        {{ 10 | currency:'USD':'symbol'}}
       <br/>
        Enter name
        <input type="text" [(ngModel)]="name"  #username/>
        {{username.value}}
        Student Subjects {{ student.subjects?.length }}
    </div>
    `
})
export class WelcomeComponent {
    name: string = "Varma";
    // promise: Promise<string>;

    // constructor() {
    //     this.promise = this.a();
    // }

    a() {
        return new Promise((resolve, reject) => {
            resolve("Promise resolved");
        })
    }
}
import {Component} from '@angular/core'

interface Person{
    name:string;
    country:string;
    
}

@Component({
    selector:'greeting',
    template:`
        <h1 *ngIf="name.length>0">Happy New Year, {{ name }}</h1>
        <input type="text" (input)="handleNameChange($event)" [value]="name"/>
        <h1>Happy Pet, {{ petName }}</h1>
        <!-- <input type="text" [(ngModel)]="petName"/> -->
        <button (click)="updateName($event)">Update Name</button>
        <ul>
            <li *ngFor="let friend of friends; let i=index"
                [ngStyle]="{color:((i+1)%2===0)?'red':'green'}"
            >
               {{ i+1 }} Happy New Year, {{ friend }}
            </li>
        </ul>

        <ul>
            <li  *ngFor="let person of people" [ngClass]="{
                'text-success':person.country === 'UK',
                'text-primary':person.country === 'USA',
                'text-danger':person.country === 'HK'
            }">{{ person.name }} ({{ person.country }})
            </li>
        </ul>
    `
})
export class GreetingComponent{
    name:string="Varma"
    petName:string="Monty";
    friends:string[]=["Ram","Robert","Rahim"];

    people:Person[]=[
        {
            name:"Varma",
            country:'USA'
        },
        {
            name:"John",
            country:'UK'
        }
    ]

    updateName(event){
        this.name="Ram";
    }

    handleNameChange(e){
        var newName=e.target.value;
        this.name=newName;
    }
}
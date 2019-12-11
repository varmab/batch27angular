import { Component } from '@angular/core'

@Component({
    selector:"friends",
    styleUrls:['friends.component.scss'],
    template:`
        <div>
            <h1>My Friends</h1>
            <ul>
                <li class="red">Ram</li>
                <li class="blue">Robert</li>
                <li class="green">Rahim</li>
            </ul>
        </div>
    `
})
export class FriendsComponent{

}
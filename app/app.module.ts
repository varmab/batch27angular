import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component'
import { FriendsComponent } from './friends.component'
import { HelloComponent } from './hello.component'
import { GreetingComponent } from './greeting.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    FriendsComponent,
    HelloComponent,
    GreetingComponent
  ]
})
export class AppModule {}
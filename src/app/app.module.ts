import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ChatRoomComponent } from "./chat-room/chat-room.component";
import { AppRoutingModule } from "./app-routing.module";
import { UserInfoDirective } from './directives/user-info.directive';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import {environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, LoginComponent, ChatRoomComponent, UserInfoDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()],
  providers: [UserInfoDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}

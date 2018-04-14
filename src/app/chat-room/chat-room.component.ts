import { Component, OnInit } from '@angular/core';
import { UserInfoDirective } from '../directives/user-info.directive';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  messagesCollection: AngularFirestoreCollection<object>;

  constructor(private userInfoDirective: UserInfoDirective, private afs: AngularFirestore) {
    this.messagesCollection = this.afs.collection('messages')
    console.log(this.messagesCollection)
  }

  ngOnInit() {
  }

}

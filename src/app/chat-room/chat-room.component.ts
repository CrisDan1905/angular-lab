import { Component, OnInit } from '@angular/core';
import { UserInfoDirective } from '../directives/user-info.directive';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  private messagesCollection: AngularFirestoreCollection<object>;
  private messages$: Observable<any>;
  private messagesList: object[];

  constructor(private userInfoDirective: UserInfoDirective, private afs: AngularFirestore) {

    this.messagesCollection = this.afs.collection('messages');
    this.messages$ = this.messagesCollection.valueChanges();
    this.messages$.subscribe(data => this.messagesList = data);
    console.log(this.messagesCollection, this.messages$)
  }

  ngOnInit() {
  }

}

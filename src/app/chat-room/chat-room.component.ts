import { Component, OnInit } from '@angular/core';
import { UserInfoDirective } from '../directives/user-info.directive';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from '@firebase/util';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  public messagesList: object[] = [];
  public userInfo: object = JSON.parse(localStorage.getItem('userInfo'));

  private messagesCollection: AngularFirestoreCollection<object>;
  private messages$;


  constructor(private userInfoDir: UserInfoDirective, private afs: AngularFirestore, private router: Router) {

    this.messagesCollection = this.afs.collection('messages', ref => ref.orderBy('created', 'asc'));
    // this.messagesCollection.ref.orderBy('created', 'desc');
    this.messages$ = this.messagesCollection.valueChanges();
    this.messages$.subscribe(data => {console.log(data); this.messagesList = data });
    console.log(this.messagesCollection, this.messages$)
  }

  ngOnInit() {
  }

  submitMessage(form: FormGroup) {
    const messageToSend = {
      ...form.value,
      ...this.userInfo,
      created: Date.now()
    };
    this.messagesCollection.add(messageToSend);
    console.dir(localStorage.getItem('userInfo'));
  }

  goBack() {
    this.router.navigate(['/login']);
  }

}

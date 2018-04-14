import { Component, OnInit } from '@angular/core';
import { UserInfoDirective } from '../directives/user-info.directive';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  constructor(private userInfoDirective: UserInfoDirective) { }

  ngOnInit() {
  }

}

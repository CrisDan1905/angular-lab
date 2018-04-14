import { Component, OnInit } from '@angular/core';
import { UserInfoDirective } from '../directives/user-info.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userInfoDirective: UserInfoDirective, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.userInfoDirective.userInfo = form.value;
    console.log(this.userInfoDirective.userInfo);
    this.router.navigate(['/chat-room'])
  }

}

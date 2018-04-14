import { Directive } from '@angular/core';

@Directive({
  selector: '[appUserInfo]'
})
export class UserInfoDirective {

  userInfo: object = { };
  constructor() { }

}

// 사용자 생성 서비스
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  getUser(): User {
    return new User('real user', '123');
  }
}

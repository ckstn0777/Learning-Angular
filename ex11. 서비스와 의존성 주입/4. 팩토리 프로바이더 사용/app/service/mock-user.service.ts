import { Injectable } from '@angular/core';
import { User } from './user';

// 테스트용 가상 사용자 생성 서비스

@Injectable()
export class MockUserService {
  getUser(): User {
    return new User('mock user', 'abc');
  }
}

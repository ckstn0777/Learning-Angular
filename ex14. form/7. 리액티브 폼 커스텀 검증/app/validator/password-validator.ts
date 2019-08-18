import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static match(form: AbstractControl) {
    // 매개변수로 전달받은 검증 대상 폼 모델에서 password와 confirmPassword를 취득
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;

    // 비교
    if (password !== confirmPassword) {
      // 검증에 실패한 경우, 에러 객체를 반환한다.
      return { match: { password, confirmPassword }};
    }
    else {
      // 검증에 성공한 경우 null을 반환한다.
      return null;
    }
  }
}

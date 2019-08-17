// 주입 대상의 토큰
export class AppConfig {
  url: string;
  port: string;
}
// 주입 대상의 값
export const MY_APP_CONFIG: AppConfig = {
  url: 'http://somewhere.io',
  port: '5000'
}

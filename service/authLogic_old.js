import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
class AuthLogic { //객체 선언 - 자바스크립트에는 중복선언 불가
  constructor() { //익명생성자
    this.firebaseAuth = getAuth(); //구글에서 객체 주입해줌
    this.googleProvider = new GoogleAuthProvider(); //구글 지원객체
    this.githubProvider = new GithubAuthProvider(); //구글 github지원객체
  }
  login(providerName) { //로그인 함수
    //console.log("providerName : " + providerName);
    const authProvider = this.getProvider(providerName); //구글인가 깃헙인가 문자열 정보 가져옴
    //console.log("authProvider : " + authProvider);
    //console.log("this.firebaseAuth : " + this.firebaseAuth);
    //return signInWithPopup(this.firebaseAuth, authProvider);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
//로그아웃 버튼이 눌리면 호출
//굳이 export로 선언하는 이유는
//리액트에서는 한페이지를 모듈화 시켜서 재사용성을 높이는 방식이므로
//어떤 컴포넌트에서든지 호출이 가능하도록 설계하는 것이 좋음 - 함수
  logout() {
    this.firebaseAuth.signOut();
  }
//호출되면 파라미터값에 따라서 변경사항이 있을 때마다 자동호출 됨
  onAuthChange(onUserChanged) {
    //구글에서 제공하는 함수 - onAuthStateChanged
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
//아래 파라미터로 Google or Github
  getProvider(providerName) { //Google google 에러
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthLogic; // 이래야 외부에서 사용가능

/* 
  package.json에는 의존관계 라이브러리 등록
  (개발자 의존 -D - 실제 운영서버에는 미배포)
  외부 스크립트 사용 방법
  1. common.js - 디폴트(생략되어있음 - package.json -> npm init -y)
    cosnt http = reqiores('http')
  2. module
    import {,,,} from './XXX.js'

    export 여러개 가능 {}

    export default 하나만 가능

    DOM Tree가 완성되면 DOM API 사용가능
    -> document.querySelector() document.querySelectAll => []
    브라우저는 같은 이름이 두개 이상이면 자동으로 배열 전환

    const temp = JSON.stringify(respeonse.json()) ; 객체 → 문자열 
    const jsonDoc = JSON.parse(temp) ; 문자열 → 배열
    jsonDoc[].XXXX

    각자 처리하다가 먼저 처리가 되면 -> then(()=>{})

*/

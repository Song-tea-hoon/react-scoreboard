// 자바스크립트 실행순서 알기: 싱글쓰레드이다.
// 코드를 모두 실행하고 마지막에 예약된 큐를 확인해서 실행한다.
// 따라서 실행결과는 항상 동일하다.

// 메인스레드 -> 동기 부분
// 큐 -> 비동기 부분

console.log("A"); // 메인 스레드

//예약 - 큐에 저장
setTimeout(function () {
  console.log("B");
}, 0);

console.log("C"); // 메인 스레드

//만일 루프가돌면?
// while(true) {} -> B가 출력이 되지 않는다... 메인스레드가 계속 돌아 큐에 있는 setTimeout을 가져올 수 없다.

//예약목록 확인 및 실행


// https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-%EC%97%94%EC%A7%84-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%BD%9C%EC%8A%A4%ED%83%9D-%EA%B0%9C%EA%B4%80-ea47917c8442
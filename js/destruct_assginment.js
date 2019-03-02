// Destructuring assignment (해체 할당 문법 / 비구조화 할당? )

var a, b, rest;
// 배열 해체할당
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20
//
// [a, b, ...rest] = [10, 20, 30, 40, 50]; // 여기서 ...는 나머지 연산자 -> a, b를 제외한 모든 나머지의 배열
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// Object 해체할당
// Stage 4(finished) proposal Object에서는 stage4에서 추가
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// Destructuring assignment 기본 값 설정
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
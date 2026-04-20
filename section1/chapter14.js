//스코프
//-> 젼역 스코프 / 지역 스코프
//전역 스코프: 전체 영역에서 접근 가능
//지역 스코프: 특정 지역에서만 접근 가능
 
let a = 1;

function funcA() {
    let b = 2;
    console.log(a);

    function funcB() {
    }
}

funcA();
// funcB();
// console.log(b);

if (true) {
    let c = 1;
}
// console.log(c)

for (let i = 0; i < 10; i++) {
    let d = 1;
}
// console.log(d);
// console.log(i);
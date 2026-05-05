//1. Date 객체 생성 방법
let date1 = new Date();

let date2 = new Date(2010, 5, 3, 7, 37, 26);

//2. 타임 스탬프
//특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();

let date3 = new Date(ts1);

//3. 시간 요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

//4. 시간 요소 수정하는 방법
date1.setFullYear(2023);
date1.setMonth(11);
date1.setDate(25);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

//5. 시간을 여러 포멧으로 출력
console.log(date1.toDateString());
console.log(date1.toLocaleString());
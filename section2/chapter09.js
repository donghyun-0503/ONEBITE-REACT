//5가지 배열 변형 메서드
//1. filter
//-> 조건에 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    {name : "이동현", hobby : "게임"},
    {name : "홍길동", hobby : "게임"},
    {name : "전우치", hobby : "독서"},
]; 

const gamePeople = arr1.filter((item) => item.hobby === "게임");

//2. map
//배열의 모든 요소를 순회하면서, 각각의 콜백함수를 실행하고 결괏값을 새로운 배열로 반환
let arr2 = [1, 2, 3]
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

let names = arr1.map((item) => item.name);

//3. sort
//배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

//오름차순
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
    if (a > b) {
        //b가 a 앞으로
        return 1;
    } else if (a < b) {
        //a가 b 앞으로
        return -1;
    } else {
        //두 값의 자리를 바꾸지 않음
        return 0;
    }
});

//내림차순
let arr5 = [10, 3, 5];
arr5.sort((a, b) => {
    if (a > b) {
        //a가 b 앞으로
        return -1;
    } else if (a < b) {
        //b가 a 앞으로
        return 1;
    } else {
        //두 값의 자리를 바꾸지 않음
        return 0;
    }
});

//4. toSorted (가장 최근에 추가된 최신 함수)
//정렬된 새로운 배열을 반환하는 메서드
let arr6 = ["c", "a", "b"];
const sorted = arr6.toSorted();

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr7 = ["hi", "im", "honggildong"];
const joined = arr7.join(" ");
console.log(joined);
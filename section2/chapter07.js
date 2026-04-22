//6가지 요소 조작 메서드

//1. push
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

//2. pop
//배열의 맨 뒤에 있는 요소 제거하고 반환하는 메서드
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

//3. shift
//배열의 맨 앞에 있는 요소 제거하고 반환하는 메서드
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

//4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
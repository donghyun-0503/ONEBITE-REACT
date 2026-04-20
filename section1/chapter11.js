//함수 선언
// function greeting() {
//     console.log("환영합니다");
// }

// console.log("함수 호출 전")
// greeting();
// console.log("함수 호출 후")

let area1 = getArea(20, 20);
console.log(area1)

let area2 = getArea(30, 20);
console.log(area2)

let area3 = getArea(120, 200);

//호아스팅
//-> 끌어올리다 함수가 밑에 있으면 맨 위로 보내버리는 기능
function getArea(width, height) {
    function another() { //중첩함수
        console.log("another")
    }
    another();
    let area = width * height;

    return area;
}
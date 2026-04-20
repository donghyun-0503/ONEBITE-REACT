//1.if 조건문(if문)
let num = 9;

if (num >= 10) {
    // console.log("num은 10 이상입니다");
    // console.log("조건이 참입니다")
} else if (num >= 5) {
    // console.log("num이 5 이상입니다")
} else if (num >= 3) {
    // console.log("num이 3 이상입니다")
}
else {
    // console.log("조건이 거짓입니다")
}

//2. switch 조건문(switch문)
let animal = "owl";

switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case "snake": {
        console.log("뱀");
        break;
    }
    case "tiger": {
        console.log("호랑이");
        break;
    }
    default: {
        console.log("그런 동물은 전 모릅니다")
    }
}
// const clock = document.querySelector("h2#clock");
// // clock.innerText = "01:00";

// function sayHello(){
//     console.log("hello");
// }

// setInterval(sayHello , 5000);
// // 5000=5초
// // settimeout(sayHello,5000); // setinterval과 비슷함

//웹사이트에 시계 만들기
// const clock = document.querySelector("h2#clock");

// function getClock(){
//     const date = new Date();
//     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }// 콘솔로그에 실시간 시간 표시하도록 해줌
// getClock();
// setInterval(getClock , 1000);


//시계는 구현했는데 01초가 아니라 1초로 나와서 01초로 바꾸고 싶을 떄
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock , 1000); // 인터벌 없으면 시계가 안굴러감


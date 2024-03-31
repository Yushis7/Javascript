// // alert("hi");
// const a = 5;
// const b = 2;
// const myName = "Yun";
// // let myName = "yushis";
// // var myName = "U";
// //const,let위주로 쓰고 var는 그닥 쓸 필요 없음
// const amIFat = false;
// console.log(amIFat); //true,false,null,undefined 4가지 종류 있음





// console.log(a+b);
// console.log("hello" + myName);

// myName = "jun";

// console.log ("my name is + myName");


// const daysOfWeek = mon+tue+wed+thu+fri+sat+sun;
// const daysOfWeek = [mon,tue,wed,thu,fri,sat,sun];

// //// 배열에서 요일 지정하기
// console.log(daysOfWeek[5]);

// //// 배열에서 요일 추가하기
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// const nonsense = [1,2,"hello",false,null,true];

// console.log(nonsense);

// const toBuy = ["potato","tomato","pizza"];

// toBuy.push("cola");

// console.log(toby[1]);

// const playName = "jun";
// const playerPoints = 100;
// const playerHandsome = false;
// const playerfat = "little bit";
// 일일이 이렇게 쓰지말고
// const play = ["jun",100,false,"littlebit"];

// player.name
// player.points 
// player.hansome 

// function sayHello(nameOfPerson,age){
//     console.log("Hello my name is "+ nameOfPerson+"and I'm" + age);

// }

// sayHello("Alex",10);
// sayHello("Bread",20);
// sayHello("Chris",30);

// function plus(a,b){
//     console.log(a+b);
// }

// plus(10,20);

//// 계산기 만들기
// function plus(firstNumber,secondNumber){
//     console.log(firstNumber + secondNumber);
// }

// function divide(a,b){
//     console.log(a/b);
// }

// plus(10,5);
// divide(10,5);

//// 반복 없애고 간편하게 만들기
// const player = {
//     name: "nico",
//     sayHello: function(){
//         console.log("hello!");
//     },
// };

// console.log(player.name);
// player.sayHello();

// const player = {
//     name: "nico",
//     sayHello: function(otherPersonName){
//         console.log("hello! "+ otherPersonName +"nice to meet you");
//     },
// };

// player.sayHello("Alex");
// player.sayHello("Bjex");


//계산기 구현
// function calculator (a,b){
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a/b);
//     console.log(a*b);
// };

// calculator(5,5);

//더 세세하게
// const calculator ={
//     add:function(a,b){
//         console.log(a+b);
//     },
//     minus:function(a,b){
//         console.log(a-b);
//     },
//     divide:function(a,b){
//         console.log(a/b);
//     },
//     power:function(a,b){
//         console.log(a*b);
//     }
// };

// calculator.add(5,5);
// calculator.minus(5,5);
// calculator.divide(5,5);
// calculator.power(5,5);

// const age = 96;
// function calculateKrAge(ageOfForeigner){  //ageOfForeigner =96
//     return ageOfForeigner +2;
// }

// const KrAge = calculateKrAge(age);  //age = 96

// console.log(KrAge);


// const calculator = {
//     plus : function(a,b){
//         return a+b;
//     },

//     minus : function(a,b){
//         return a-b;
//     },

//     multiple : function(a,b){
//         return a*b;
//     },

//     divide : function(a,b){
//         return a/b;
//     },

//     square : function(a,b){
//         return a**b;
//     }
// }

// const plusResult = calculator.plus(2,3);
// const minusResult = calculator.plus(2,3);
// const multipleResult = calculator.plus(2,3);
// const divideResult = calculator.plus(2,3);
// const squareResult = calculator.plus(2,3);

// alert처럼 알림창 뜨는데 입력 할 수 있음
// const age = prompt("How old are you?");

// // console.log(age);

// // console.log(typeof age); // typeof 적으면 string인지 숫자인지 알려줌ㄴ

// // console.log(typeof "15", typeof parseInt("15")); // parseint넣으면 string을 int로 바꿔줌

// console.log("15", parseInt("ㅁㄴㅇ12")); // 그냥 숫자로 바꿔줌 NAN은 Not a number


// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age)){
//     console.log("please write a number"); // 숫자 안쓰면 숫자쓰라고 알림뜸
// } else{
//     console.log("Thanks you for writing your age:)"); //숫자 쓰면 뜨는 알림
// }


//if문 여러개 쓰기
// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age<0 ){
//     console.log("please write a number"); // 숫자 안쓰면 숫자쓰라고 알림뜸
// } else if (age <18 ) {
//     console.log("You are so Young.");
// } else if(age>=18 && age<=50){    //&&=and || =or
//     console.log("You can drink");
// }  else if(age>50 && age <=80){
//     console.log("You should excercise."); //숫자 쓰면 뜨는 알림
// } else if (age === 100){  // 100세가 age>80아래로 가면 적용 안됨 서순지키기
//     console.log("wow you are so long time live");
// } else if (age>80){
//     console.log("You can whatever you want");
// }

// document.title = "Hello.js"

// //document는 html을 의미함 
// const title = document.getElementById("title");
// title.innerText = "Got you!"; // title로 지정하면 html의 title이 변경 됨

// console.log(title.id);
// console.log(title.className);

// const title = document.querySelector("hello"); // querySelector를 많이 씀
// console.log(title);
// title.innerText = "Hello";

// title.style.color = "blue";

// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     h1.title.style.color = "blue";
// }

// function handleMouseEnter() {
//     h1.title.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     h1.title.innerText = "Mouse is gone!";
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "toamto";
// }
// function handleWindowCopy(){
//     akert("copier!");
// }
// function handleWindowOffline(){
//     alert("offline wifi");
// }
// function handleWindowOnline(){
//     alert("All Good");
// }

// h1.addEventListener("click",handleTitleClick);
// h1.addEventListener("mouseenter",handleMouseEnter);
// h1.addEventListener("mouseleave",handleMouseLeave);

// window.addEventListener("resize",handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     if  (h1.style.color === "blue"){
//         h1.style.color = "tomato";
//     } else{
//         h1.style.color = "blue";
//     }
//     // console.log(h1.style.color);
// }

// h1.addEventListener("click",handleTitleClick);
// //여기서 h1.style.color 를 일일이 쓰는건 좀 깔끔하지 않으니

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if  (currentColor === "blue"){
//         newColor = "tomato";
//     } else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click",handleTitleClick);
// //로 바꿔준다

// //css와 연동시켜 바꿀 수 도 있다
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     h1.className = "active"; // active가 css의 active와 연동됨
// }

// h1.addEventListener("click",handleTitleClick);
// //로 바꿔준다


// // login 만들기 
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector(" input");
// const loginButton = loginForm.querySelector(" button");
 
// // or 
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
 
// function onLoginBtnClick() {
//     // console.log(loginInput.value);
//     // console.log("click");
//     const username = loginInput.value;
//     if(username ===""){
//         alert("please write your name");
//     } else if (username.length > 15) {
//         alert("your name is too long");
//     }
// }

// loginButton.addEventListener("click",onLoginBtnClick);
// // 근데 굳이 js로 이렇게 코드 칠 필요 없음 html로 쉽게 가능

//html 에 맡기고 버튼만 구현시키기

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     console.log(username);
// }
// loginButton.addEventListener("click",onLoginBtnClick);



//히든으로 아이디 로그인시 로그인 창 없애기
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const HIDDEN_CLASSNAME = "Hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello"+username;
    greeting.innerText = `Hello ${username}`; //347(윗)줄과 같다
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername= localStorage.getItem(USERNAME_KEY);



if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    greeting.innerText = `Hello${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const HIDDEN_CLASSNAME = "Hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     greeting.innerText = "Hello"+username;
//     // greeting.innerText = `Hello ${username}`; //347(윗)줄과 같다
//     greeting.classList.remove(HIDDEN_CLASSNAME);
//     console.log(loginInput.value);
// }
// function handleLinkClick(){
//     alert("clicked");

// }
// loginForm.addEventListener("submit",onLoginSubmit);
// link.addEventListener("click",handleLinkClick);




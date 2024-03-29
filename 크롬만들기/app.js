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

document.title = "Hello.js"

//document는 html을 의미함 
const title = document.getElementById("title");
title.innerText = "Got you!"; // title로 지정하면 html의 title이 변경 됨

console.log(title.id);
console.log(title.className);






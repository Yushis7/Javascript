const EraserBtn = document.getElementById("eraser-btn")
const destroybtn = document.getElementById("destroy-btn")
const modeBtn = document.getElementById("mode-btn")
// const colorOptions = document.getElementsByClassName("color-option")
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color")
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d") // 대문자 아님, ctx=context,미술용 붓
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width=CANVAS_WIDTH;
canvas.height=CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

//1
// ctx.fillRect(50,50,100,200) // 검은 직사각형 

//2
// ctx.rect(50,50,100,100);
// ctx.rect(150,150,100,100);
// ctx.rect(250,250,100,100);
// ctx.fill();// 색을 채워 넣는 것
// ctx.stroke();//선만 채워 넣는 것
// ctx.rect(350,350,100,100); //ctx.fill();이후에 넣으면 안나옴
// ctx.fillStyle="red";
// ctx.strokeStyle="blue";
// ctx.fill();
// ctx.stroke();
// setTimeout(()=>{ctx.fill();},5000);  //5초 뒤에 빨간색으로 바꾸기


//3
// ctx.beginPath();
// ctx.rect(350,350,100,100);
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.moveTo(50,50);
// ctx.lineTo(150,50)
// ctx.lineTo(150,150)
// ctx.lineTo(50,150)
// ctx.lineTo(50,50)
// ctx.fill(); // lintTo는 선긋기다


//4
// ctx.fillRect(200,200,50,200);
// ctx.fillRect(400,200,50,200);
// ctx.lineWidth=2;
// ctx.strokeRect(300,300,50,100);
// ctx.fillRect(200,200,200,20);
// ctx.moveTo(200,200);
// ctx.lineTo(325,100);
// ctx.lineTo(325,100);
// ctx.lineTo(450,200);
// ctx.stroke();

//5
// ctx.fillRect(210,200,15,100);
// ctx.fillRect(350,200,15,100);
// ctx.fillRect(260,200,60,200);
// ctx.arc(250,100,50,0,2 * Math.PI);
// ctx.fill();
// ctx.beginPath();
// ctx.fillStyle="White";
// ctx.arc(260+10,80,8,Math.PI,2 * Math.PI);
// ctx.arc(220+10,80,8,Math.PI,2 * Math.PI);
// ctx.fill();

//6
// ctx.lineWidth = 2;
// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
// ]
// function onclick(event){
//     ctx.beginPath();
//     ctx.moveTo(400,400); // 0,0에서 시작해 한줄 긋기
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX,event.offsetY);
//     ctx.stroke();
// }
// // canvas.addEventListener("click",onclick);
// canvas.addEventListener("mousemove",onclick);

//7
ctx.lineWidth = 2;
function onMove(event){
    if (isPainting){
    ctx.lineTo(event.offsetX,event.offsetY)
    ctx.stroke();
    return;
    }
    ctx.beginPath(); // 추가해서 1~10까지 선 굵기 다르게 가능
    ctx.moveTo(event.offsetX,event.offsetY);
}
// function onMouseDown()
function startPainting(){
    isPainting = true;
}
// function onMouseUp()
function cancelPainting(){
    isPainting = false;
}
function onLineWidthChange(event){
    // console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}
function onColorChange(event){
    // console.log(event.target.value);
    const colorValue = event.target.dataset.color;
    // ctx.strokeStyle = event.target.value;
    // ctx.fillStyle = event.target.value;
}
function onColorClick(event){
    // console.dir(event.target.dataset.color);
    const colorValue = event.target.dataset.color;
    // ctx.strokeStyle = event.target.dataset.color;
    // ctx.fillStyle = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue; // 지정색깔로 박스도 바뀌게 변경
}
function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else{
        isFilling = true;
        modeBtn.innerText ="Draw";
    }
}
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
}
function onDestroyClick(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}
function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";

}

canvas.addEventListener("mousemove",onMove);
// canvas.addEventListener("mousedown",onMouseDown);
canvas.addEventListener("mousedown",startPainting);
// canvas.addEventListener("mouseup",onMouseUp);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting);
canvas.addEventListener("click",onCanvasClick);
lineWidth.addEventListener("change",onLineWidthChange)
color.addEventListener("change",onColorChange)
// console.log(colorOptions);
colorOptions.forEach(color => color.addEventListener("click",onColorClick));
modeBtn.addEventListener("click",onModeClick);
destroybtn.addEventListener("click",onDestroyClick);
EraserBtn.addEventListener("click",onEraserClick);
// ctx.moveTo(200,200);
// ctx.lineTo(400,400);
// ctx.stroke();
//startPainting,canclePainting을 쓰면 칸 밖에 나가면 그림을 못그리고 그대로 mouseup,down을 쓰면 다시 그대로 쓰임

//8

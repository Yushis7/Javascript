const toDOForm = document.getElementById("todo-form");
const toDoInput = toDOForm.querySelector("input");
const toDOList = document.getElementById("todo-list");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDOForm.addEventListener("submit",handleTodoSubmit);
//이걸 만들면 Write a TOP do and press enter 칸에서 엔터를 쳐도 새로고침이 안일어남




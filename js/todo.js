const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDos에 저장한 id와 li의 id가 다른걸 빼고 다시 어레일를 만들고
    saveToDos();        //savedToDos 함수를 호춣해서 다시 만든 array를 localstorage에 저장하라
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();             //2 브라우저 기본 동작 "새로고침"을 멈추고
    const newTodo = toDoInput.value     //3 newTodo 변수에 input값을 담고
    toDoInput.value="";                 //4 input 값을 초기화 한 후에
    const newTodoOj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoOj);
    paintToDo(newTodoOj);               //5 newtodo에 저장된 값을 paintTodo 함수로 보낸다
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);  // 1 todo-form에 submit 이벤트를 주고 handleToDoSubmit 함수를 호출

const savedToDos = localStorage.getItem(TODOS_KEY);     //localstorage의 todos 값을 saveTodos에 저장

if(savedToDos){                                          //savedTodos에 값이 있으면
    const parsedToDos = JSON.parse(savedToDos);         //parsedToDos에 savedToDos 값을 넣고
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}
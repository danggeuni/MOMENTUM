const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

const TODOS_TEXT = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_TEXT, JSON.stringify(toDos));
}

function deleteList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paitnTodo(newTodoOj) {
  const list = document.createElement("li");
  list.id = newTodoOj.id;
  const span = document.createElement("span");
  span.innerText = newTodoOj.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteList);
  list.appendChild(span);
  list.appendChild(btn);
  todoList.appendChild(list);
}

function todo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoOj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoOj);
  paitnTodo(newTodoOj);
  saveToDos();
}

todoForm.addEventListener("submit", todo);

const savedToDos = localStorage.getItem(TODOS_TEXT);

if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paitnTodo);
}

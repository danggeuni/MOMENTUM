const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

let localSetList = [];

// 로컬 저장 펑션
function handleSave() {
  localStorage.setItem("list", JSON.stringify(localSetList)); // 배열 모양의 stirng으로 저장
}

// 삭제 펑션
function handleDelete(event) {
  const deleteBtn = event.target.parentElement;
  deleteBtn.remove();

  localSetList = localSetList.filter((item) => item.id != deleteBtn.id); // 빈배열.필터 id 없을 시 제외
  handleSave(); // 제외 후 저장
}

// 디스플레이 표시 펑션
function handleDisplay(newTodoValue) {
  const li = document.createElement("li");
  li.id = newTodoValue.id;
  const span = document.createElement("span");
  span.innerText = newTodoValue.text; // key : text 표시

  // 버튼 생성 및 리스트에 append
  const btn = document.createElement("button");
  btn.innerText = "❌";

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);

  btn.addEventListener("click", handleDelete); // 버튼 클릭시 리스트 삭제 펑션 실행
}

// 값 저장 펑션
function handleSubmit(event) {
  event.preventDefault();

  const todoValue = todoInput.value;

  // id 보유 data 생성
  const newTodoValue = {
    text: todoValue,
    id: Date.now(),
  };

  todoInput.value = "";
  localSetList.push(newTodoValue);

  handleDisplay(newTodoValue); // 디스플레이 표시 펑션 실행
  handleSave(); // 저장 펑션 실행
}

todoForm.addEventListener("submit", handleSubmit);

const localGetList = localStorage.getItem("list");

// 로컬에 데이터 있으면 데이터값을 배열에 넣고 다시 화면에 표시
if (localGetList !== null) {
  const remainList = JSON.parse(localGetList);
  localSetList = remainList;
  localSetList.forEach(handleDisplay);
}

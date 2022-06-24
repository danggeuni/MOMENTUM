const todoForm = document.querySelector(".todo-form"); // 만든 폼 가져오고
const todoInput = todoForm.querySelector("input"); // 만든 인풋 가져오고
const todoList = document.querySelector(".todo-list"); // 만들 ul 가져오고

const TODOS_TEXT = "toDos";

let toDos = []; // 15. 빈 배열 하나 만들고

function saveToDos() {
  localStorage.setItem(TODOS_TEXT, JSON.stringify(toDos)); // 16. 로컬 저장 펑션 만들고 (JSON 사용해서 배열 모양 string으로)
}

function deleteList(event) {
  const li = event.target.parentElement; // 13. 클릭된 리스트(부모) 확인 변수
  li.remove(); // 14. 리스트 삭제
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); // 30. 배열에 필터로 input id와 리스트 id 비교하여 제외하게 하고
  saveToDos(); // 31. 최종 저장 펑션 누르기!
}

function paitnTodo(newTodoOj) {
  const list = document.createElement("li"); // 6. 리스트 만들고
  list.id = newTodoOj.id; // 28. 리스트의 아이디에 input값 동일 id 부여하고
  const span = document.createElement("span"); // 7. span 만들고
  span.innerText = newTodoOj.text; // 8. (하나씩 밑에 밀림) input값 넣고  // 29. 객체의 키1 값 넣고
  const btn = document.createElement("button"); // 8. 버튼 만들고
  btn.innerText = "❌"; // 9. 버튼에 이모지 넣고
  list.appendChild(span); // 10. 리스트에 span 넣고
  list.appendChild(btn); // 11. 리스트에 버튼 넣고
  todoList.appendChild(list); // 12. ul에 리스트 넣고

  btn.addEventListener("click", deleteList); // 버튼 클릭 시 이벤트 넣고
}

function todo(event) {
  event.preventDefault(); // 2. 멈춰놓고
  const newTodo = todoInput.value; // 3. input값 가져오고
  todoInput.value = ""; // 4. display에서 없애고
  const newTodoOj = {
    // 23. 객체 생성해서
    text: newTodo, // 24. 키1은 input 값으로
    id: Date.now(), // 25. 키2는 Date.now() 값으로 (중복되지 않도록)
  };
  toDos.push(newTodoOj); // 26. 위에서 만들어진 객체를 배열값으로 보내고
  paitnTodo(newTodoOj); // 5. 다른 펑션으로 값과 함께 전달  // 27. display 출력 펑션에 변경해서 다시 보내고
  saveToDos(); // 17. input 제출 시 로컬저장 펑션 실행
}

todoForm.addEventListener("submit", todo); // 1. submit시 실행할 이벤트리스너 만들고

const savedToDos = localStorage.getItem(TODOS_TEXT); // 18. 저장된 배열 변수로 만들고

if (savedToDos !== null) {
  // 19. 만약 배열이 존재할 경우,
  const parsedTodos = JSON.parse(savedToDos); // 20. 로컬에서 숫자로 꺼내서
  toDos = parsedTodos; // 21. 배열에 다시 집어 넣고
  toDos.forEach(paitnTodo); // 22. 배열값의 각각을 display 구현하게 하고
}

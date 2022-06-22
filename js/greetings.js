const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const hello = document.querySelector(".hello");

const USERNAME_TEXT = "userName";
const HIDDEN_TEXT = "hidden";

function loginAfter(userName) {
  loginForm.classList.add(HIDDEN_TEXT); // form 숨기고
  hello.classList.remove(HIDDEN_TEXT); // span 표시
  hello.innerText = `Hello ${userName}`; // 값으로 인사
}

function handleSubmit(event) {
  event.preventDefault(); // 새로고침 방지
  const userName = loginInput.value; // input 값 저장
  loginAfter(userName); // form 숨기고, span 표시, input 값으로 인사
  localStorage.setItem(USERNAME_TEXT, userName); // input 값 localStorage에 저장
}

const loginUser = localStorage.getItem(USERNAME_TEXT); // localStorage 값 불러오기

if (loginUser === null) {
  // 만약 localstorage에 데이터가 없다면,
  loginForm.addEventListener("submit", handleSubmit); // input값 local에 저장하는 펑션 실행
} else {
  // 데이터가 있으면,
  loginAfter(loginUser); // form 숨기고 span 표시, local 값으로 인사
}

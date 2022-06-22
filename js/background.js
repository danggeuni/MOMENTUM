const imgs = [
  "01.png",
  "02.jpeg",
  "02.png",
  "3.jpeg",
  "03.png",
  "04.png",
  "05.png",
  "7.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
];

const img = imgs[Math.floor(Math.random() * imgs.length)]; // 랜덤 이미지 선택
const bgImg = document.createElement("img"); // img 태그 생성
bgImg.src = `img/${img}`; // img 태그 소스 생성

document.body.appendChild(bgImg); // body에 img 태그 추가

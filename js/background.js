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

const todayImg = imgs[Math.floor(Math.random() * imgs.length)];

const imgMake = document.createElement("img");
imgMake.setAttribute("src", `img/${todayImg}`);

document.body.appendChild(imgMake);

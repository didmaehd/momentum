const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); // img 태그를 만들어서 변수에 넣고
bgImage.src = `img/${chosenImage}`;  // img 에 대한 src를 설정해주고
document.body.appendChild(bgImage); // 생성한 이미지 태그를 body의 child로 append 해줬다

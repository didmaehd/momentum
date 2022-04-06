const todolist=["goCompany", "meeting", "studyJS", "workToHard", "goHome"];
console.log(todolist);
todolist.push("eatLunch");
console.log(todolist);

const info = {
    name:"tykim",
    age:41,
    weight:72,
    height:176
}
console.log(info);
console.log(info.age)
info.point=56;
info.hansome=true;
info.skill="fireball";
console.log(info);
info[2] = 10000000;
console.log(info);


const calculator = {
    add: function(a,b) {
        return (a+b);
    },
    minus:function(a,b){
        return(a-b);
    },
    divide:function(a,b){
        return(a / b)
    },
     power:function(a,b){
        return(a**b)
    },
    times:function(a,b){
        return(a*b);
    }
}

const plusResult = calculator.add(1,3);
const minusResult =calculator.minus(6,plusResult)
const divResult = calculator.divide(5,minusResult)
const timesResult = calculator.times(divResult,3)
const powerResult = calculator.power(3,divResult)


const age = parseInt(prompt("How old are you?"));
// if(isNaN(age)) {
if (isNaN(age) || age < 0){
    console.log("please write a real positive number")
}else if (age < 18) {
    console.log("You are too young.")
}else if (age >= 18 && age <= 50) {
    console.log("You can drink.")
}else if (age == 199){
    console.log('hi man')
}
else {
    console.log("You can drink.")
}

const age = parseInt(prompt("How old are you?"));
const title = document.getElementById("title");
const title2 = document.getElementById("title2")
if (isNaN(age) || age < 0){
    title.innerText = "please write a real positive number" 
    title2.innerText = "숫자를 똑바로 입력하라."
}else if (age < 18 && age >= 0){
    title.innerText = "hi man. you are very young"
    title2.innerText = "안녕? 넌 너무 어린데?ㅋ"
}else if (age > 19){
    title.innerText = "Oh! You can drink!"
    title2.innerText = "호오.. 꽤 마시겠는데?"
}

const h1 = document.querySelector(".hello h1")
console.dir(h1)
function handleTitleClick(){
    h1.style.color = "blue"; 
    h1.innerText = "Oh! OOPS!!";
}

function handleMouseEnter(){
    h1.style.color = "red";
    h1.innerText = "Mouse is HERE";
}

function handelmouseleave(){
    h1.style.color = "black";
    h1.innerText = "Mouse is GONE";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "yellowgreen";
}

function handleWindowCopy(){
    alert("Copier! Dont do that!")

}


function handleWindowOffline(){
    alert("SOS no wifi")
}

function handleWindowOnline(){
    alert("ALL GOOD")
}
h1.addEventListener("click",handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handelmouseleave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)

const h1 = document.querySelector(".hello h1")

function handleTitleClick(){
    const currentcolor = h1.style.color // 커런트컬러는 블랙이다   //  커런트 컬러가 블루가 되었고 // 커런트는 토마토거든  
    let newColor;
    if (currentcolor === "blue") {  // 커런트칼라가 블랙이니 패스하고    // 커런트 칼러가 불루면   // 토마토니까 패스하고
        newColor = "tomato";  //  블랙이니까 패스 하고   // 뉴 컬라는 토마토가 되어라 // 토마토니까 이것도 패스
} else {
    newColor = "blue";  // 블랙이니까  블루를 넣어줘라  // 뉴 커럴가 토마토기 때문에 패스하고  // 블루가 아니라 토마토니까 뉴칼라는 불르다 
    }
    h1.style.color = newColor; // h1.style.color 는 블루로 바꿔줘라   // h1.style.color 을 토마토로 바꿔줘라  // h1.style.color 는 뉴칼라인 블루다!
}

h1.addEventListener("click",handleTitleClick);

const h1 = document.querySelector(".hello h1")

function handleTitleClick() { 
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)){  // 클래스 리스트에 clicked가 있다면
        h1.classList.remove(clickedClass); // 삭제를 해라
    } else {
        h1.classList.add(clickedClass); // 그게 아니면 즉 클래스리스트에 clicked가 없으면 넣어줘라
    }
}

h1.addEventListener("click",handleTitleClick);


//토클은 있으면 빼주고, 없으면 넣어준다.
const h1 = document.querySelector(".hello h1")

function handleTitleClick() { 
    h1.classList.toggle("clicked");
    h1.classList.toggle("sexy-font");
}
h1.addEventListener("click",handleTitleClick);
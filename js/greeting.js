const loginForm = document.getElementById("login-form") 
// loginform 정의  html의 login-form 태그 의 정보를 담는다
const loginInput = loginForm.querySelector("input")
//loginInput정의 loginform에서 input태그 정보를 담는다
const link = document.querySelector("a")
//a를 찾아서 link로 정의 하는데 특별이 여기서는 사용되지 않는다
const greeting = document.querySelector("#greeting")
// greeting 정의 id greeting의 내용을 정의
const HIDDEN_CLASSNAME = "hidden";
// 중복되는 hiddem HIDDEN_CLASSNAME으로 정의
//hidden은 css에 정의 되어있다. // display = none;
const USERNAME_KEY = "username";
// 중복되는 username을 USERNAME_KEY로 정의

const deleteUserButton = document.getElementById("resetButton")


function onLoginSubmit(event){                      //onLoginSubmit을 만들어서
    event.preventDefault();                         //브라우저의 기본 실행을 멈추고
    loginForm.classList.add(HIDDEN_CLASSNAME);      //위에서 정의한 loginForm의 class에 hidden을 추가한다
    const username = loginInput.value;              //username변수에 loginInput에서 받는값을 저장한다
    localStorage.setItem(USERNAME_KEY,username)     //브라우저의 localstorage에 username과 입력받은 값 username을 저장한다
    paintgrddting(username);                        //paintgrddting함수에 유저로부터 받은 값 username을 넣어 호출한다
}
//여기까지 함수 정리
//유저로부터 입력 값을 받고 localstorage에 저장후  paintgrddting 함수를 호출한다

function paintgrddting(username){                   // paintgrddting 함수는 유저가 입력한 username을 받는다
greeting.innerText = `今日もがんばろうねー💛 ${username}!`;       //html greeting 태그에 텍스트로 hello 와 입력받은값을 삽입
greeting.classList.remove(HIDDEN_CLASSNAME);        //greeting 태그의 class에서 hidden을 삭제한다
}
//여기까지 함수 정리
//호출받은 paintgrddting 함수는 username값을 받아 greeting 태그에 텍스트를 추가한 후
//greting 태그에서 hidden을 삭제한다 // 왜? greeting의 text를 부라우저에 출력하기 위해

const savedUserName = localStorage.getItem(USERNAME_KEY); // savedUserName변수에 loalstorage에 저장된 값을 담는다

if (savedUserName === null) {                           //saveUserName이 null이면 
    loginForm.classList.remove(HIDDEN_CLASSNAME)        //loginForm의 class 값중에서 hidden을 삭제한다
    loginForm.addEventListener("submit",onLoginSubmit) //onLoginSubmit을 실행
}else {
    paintgrddting(savedUserName);                       // null이 아니면 저장된 유저명 saveUserName을 가지고 paintgrddting 함수를 호출
}

function resetUser(){
    localStorage.removeItem("username");
    window.location.reload()
}


deleteUserButton.onclick = function(){
    resetUser();
}